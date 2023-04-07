import React from 'react';
import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';
import Web3 from 'web3';
import { TODO_LIST_ABI, TODO_LIST_ADDRESS } from "../../config";

export const ConnectMetamask = ({ account, setAccount, setContract, contract, setTodos, connected, setConnected, getTodos }) => {
  
  

  useEffect(() => {
    getCurrentAccount();
    addAccountListener();
    
  }, []);
  

  const connectToMetamask = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3("http://localhost:7545"); 
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];
        console.log("Current account:", account);


        const TodoContract = new web3.eth.Contract(
            TODO_LIST_ABI,
            TODO_LIST_ADDRESS
          );

        setContract(TodoContract)  
        setAccount(account);
        setConnected(true);
        localStorage.setItem('connected', 'true')
        await getTodos(TodoContract);
      } catch (error) {
        console.error("User denied account access");
      }
    } else {
      console.error('No Metamask detected');
    }
  };

  const getCurrentAccount = async () => {
    if (typeof window.ethereum !== "undefined") {
      const storedConnectedState = localStorage.getItem('connected');

      if(storedConnectedState == 'false') {
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

        setContract(TodoContract)  
          setAccount(account);
          setConnected(true);
          await getTodos(TodoContract);

         
    } 
    }
  };

  const addAccountListener = async () => {
    if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
      window.ethereum.on("accountsChanged", (accounts) => {
        setAccount(accounts[0]);
        console.log(accounts[0]);
      });
    } else {
      setAccount("");
      setConnected(false);
      console.error('No Metamask detected');
    }
  };
  const clearTodos = () => {
    setTodos([]);
  };
  const disconnectFromMetamask = () => {
    setAccount(null);
    setConnected(false);
    clearTodos();
    localStorage.setItem('connected', 'false')
  };
  

  
 
  return (
    <div>
      {account && connected ? (<div>
        <p>{`inlogged ${account}`}</p>
      
        <button onClick={disconnectFromMetamask}>
          <Icon icon="logos:metamask-icon" width="50" />
          disconnect
        </button>
        </div>
      ) : (
        <button onClick={connectToMetamask}>
          <Icon icon="logos:metamask-icon" width="50" />
          connnect
        </button>
      )}
    </div>
 


  );
};
