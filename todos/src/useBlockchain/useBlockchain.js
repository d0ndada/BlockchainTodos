import { useState } from "react";
import Web3 from "web3";
import { TODO_LIST_ABI, TODO_LIST_ADDRESS } from "../config";

export const useBlockchain = () => {
  const [account, setAccount] = useState();
  const [contract, setContract] = useState();
  const [todos, setTodos] = useState([]);
  const [connected, setConnected] = useState(false);

  const getTodos = async (TodoContract) => {
    const indexCount = await TodoContract.methods.todoCount().call();
    const temp = [];
    for (let i = 1; i <= indexCount; i++) {
      const todo = await TodoContract.methods.todos(i).call();
      if (todo.text !== "" && todo.id !== "0") {
        temp.push(todo);
      }
    }
    setTodos(temp);
  };

  const createTodo = async (newTodo) => {
    await contract.methods
      .createTodo(newTodo.text)
      .send({ from: account })
      .once("receipt", async () => {
        getTodos(contract);
      });
  };

  const removeTodo = async (id) => {
    await contract.methods
      .removeTodo(id)
      .send({ from: account })
      .once("receipt", async () => {
        getTodos(contract);
      });
  };

  const connectToMetamask = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(window.ethereum); // Changed to use window.ethereum
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];

        const TodoContract = new web3.eth.Contract(
          TODO_LIST_ABI,
          TODO_LIST_ADDRESS
        );

        setContract(TodoContract);
        setAccount(account);
        setConnected(true);
        localStorage.setItem("connected", "true");
        await getTodos(TodoContract);
      } catch (error) {
        console.error("User denied account access");
      }
    } else {
      console.error("No Metamask detected");
    }
  };

  const getCurrentAccount = async () => {
    if (typeof window.ethereum !== "undefined") {
      const storedConnectedState = localStorage.getItem("connected");

      if (storedConnectedState === "false") {
        return;
      }
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
      if (accounts.length > 0) {
        const account = accounts[0];
        console.log("Current account:", account);
        const TodoContract = new web3.eth.Contract(
          TODO_LIST_ABI,
          TODO_LIST_ADDRESS
        );

        setContract(TodoContract);
        setAccount(account);
        setConnected(true);
        await getTodos(TodoContract);
      }
    }
  };

  return {
    account,
    setAccount,
    contract,
    setContract,
    todos,
    setTodos,
    connected,
    setConnected,
    getTodos,
    createTodo,
    removeTodo,
    getCurrentAccount,
    connectToMetamask,
  };
};
