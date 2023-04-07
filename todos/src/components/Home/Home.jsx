import React,{useState} from 'react'
import { ConnectMetamask } from '../Connect/ConnectMetamask';
import TodoList from '../Todolist/TodoList';
import Web3 from 'web3';
import TodoForm from '../TodoForm/TodoForm';

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
        temp.push(todo);
      }
      setTodos(temp);
    };
   
    
    

  return (
    <>
      <header className='wrapper'>
        <ConnectMetamask account={account} setAccount={setAccount}  setContract={setContract} contract={contract} setTodos={setTodos} connected={connected} setConnected={setConnected} getTodos={getTodos} />
      </header>
      <main>
        <TodoForm />
        <TodoList account={account} setAccount={setAccount} setContract={setContract} contract={contract} todos={todos} connected={connected} setConnected={setConnected} getTodos={getTodos} setTodos={setTodos}  />
      </main>
      <footer className='wrapper'>
        footer
      </footer>
    </>
  )
}
