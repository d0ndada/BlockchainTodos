import React, { useState } from "react";
import { Metamask } from "../Metamask/Metamask";
import TodoList from "../Todolist/TodoList";
import TodoForm from "../TodoForm/TodoForm";
import { BlockchainContext } from "../../UseContext/blockchainContext";
import { useBlockchain } from "../../useBlockchain/useBlockchain";
import GithubLogo from "../../assets/github-mark.png";
import "./Home.css";

export const Home = () => {
  const blockchain = useBlockchain();

  return (
    <BlockchainContext.Provider value={blockchain}>
      <header className="wrapper">
        <Metamask />
      </header>
      <main>
        <TodoForm />
        <TodoList />
      </main>
      <footer className="wrapper ">
        <p className="footer-text">&copy; 2023 d0ndada </p>
        <a
          href="https://github.com/d0ndada"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="GithubLogo" alt="github" src={GithubLogo} />
        </a>
      </footer>
    </BlockchainContext.Provider>
  );
};
