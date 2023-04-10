import React,{useState} from 'react'
import { Metamask } from '../Metamask/Metamask';
import TodoList from '../Todolist/TodoList';
import Web3 from 'web3';
import TodoForm from '../TodoForm/TodoForm';
import { TodoContext } from '../../UseContext/Context';
import './Home.css'

export const Home = () => {
    const [account, setAccount] = useState();
    const [contract, setContract] = useState();
    const [todos, setTodos] = useState([]);
    const [connected, setConnected] = useState(false);

    
    const getTodos = async (TodoContract) => {
      console.log("getTodo function starts");
      const indexCount = await TodoContract.methods.todoCount().call();
      const temp = [];
      for (let i = 1; i <= indexCount; i++) {
        const todo = await TodoContract.methods.todos(i).call();
        console.log(todo);
        if (todo.text !== '' && todo.id !== '0') {
        temp.push(todo);
        }
      }
      setTodos(temp);
    };

    const createTodo = async (newTodo) => {
      await contract.methods.createTodo(newTodo.text)
      .send({from: account })
      .once("receipt",async (receipt) => {
        console.log(receipt);

        getTodos(contract);
      })
    }
    const removeTodo = async (id) => {
      await contract.methods
      .removeTodo(id)
      .send({ from:account })
      .once("receipt", async (receipt) => {
        console.log(receipt);
        
        getTodos(contract)
      })
    }
   
    
    

  return (
    <TodoContext.Provider value={{ account, setAccount, contract, setContract, todos, setTodos, connected, setConnected, getTodos, createTodo, removeTodo }}>
      <header className='wrapper'>
        <Metamask />
      </header>
      <main>
        <TodoForm  />
        <TodoList   />
      </main>
      <footer className='wrapper '>
      <p className='footer-text' >&copy; 2023 d0ndada</p>
      </footer>
    </TodoContext.Provider>
  )
}
