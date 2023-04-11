import React from "react";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { BlockchainContext } from "../../UseContext/blockchainContext";
import "./Metamask.css";

export const Metamask = () => {
  const {
    account,
    setAccount,
    setTodos,
    connected,
    setConnected,
    getCurrentAccount,
    connectToMetamask,
  } = useContext(BlockchainContext);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    getCurrentAccount();
    addAccountListener();
  }, []);

  const handleMouserEnter = () => {
    setIsHovering(true);
  };

  const handleMouserLeave = () => {
    setIsHovering(false);
  };

  const addAccountListener = async () => {
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      window.ethereum.on("accountsChanged", (accounts) => {
        setAccount(accounts[0]);
        console.log(accounts[0]);
      });
    } else {
      setAccount("");
      setConnected(false);
      console.error("No Metamask detected");
    }
  };
  const clearTodos = () => {
    setTodos([]);
  };
  const disconnectFromMetamask = () => {
    setAccount(null);
    setConnected(false);
    clearTodos();
    localStorage.setItem("connected", "false");
  };

  const getShortAddres = (address) => {
    return address.slice(0, 4) + "..." + address.slice(-3);
  };

  return (
    <div className="header-container">
      <h2 className="title">Todo</h2>
      <div>
        {account && connected ? (
          <div className="account-info">
            <span
              className="account-tooltip"
              onMouseEnter={handleMouserEnter}
              onMouseLeave={handleMouserLeave}
            >
              {isHovering ? (
                <span className="full-address">{account}</span>
              ) : (
                <span className="short-address">{getShortAddres(account)}</span>
              )}
            </span>

            <button className="metamask-btn" onClick={disconnectFromMetamask}>
              <Icon icon="logos:metamask-icon" width="50" />
              <span className="material-symbols-outlined">logout</span>
            </button>
          </div>
        ) : (
          <div className="metamask-container">
            <button className="metamask-btn" onClick={connectToMetamask}>
              <Icon icon="logos:metamask-icon" width="50" />
              <span className="material-symbols-outlined">login</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
