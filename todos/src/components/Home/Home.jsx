import React,{useState} from 'react'
import { Metamask } from '../Metamask/Metamask';
import TodoList from '../Todolist/TodoList';
import Web3 from 'web3';
import TodoForm from '../TodoForm/TodoForm';
import { BlockchainContext } from '../../UseContext/blockchainContext';
import { useBlockchain } from '../../useBlockchain/useBlockchain';
import './Home.css'

export const Home = () => {
    const blockchain = useBlockchain()

  return (
    <BlockchainContext.Provider value={blockchain}>
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
    </BlockchainContext.Provider>
  )
}
