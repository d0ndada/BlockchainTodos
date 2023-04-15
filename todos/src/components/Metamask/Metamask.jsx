import React from "react";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { BlockchainContext } from "../../UseContext/blockchainContext";
import {
  AccountInfo,
  HeaderContainer,
  HeaderTitle,
  FullAddress,
  ShortAddress,
  MetamaskButton,
  MetamaskContainer,
} from "../styles/HeaderStyles";

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
    <HeaderContainer>
      <HeaderTitle>Todo</HeaderTitle>
      <>
        {account && connected ? (
          <AccountInfo>
            <span
              onMouseEnter={handleMouserEnter}
              onMouseLeave={handleMouserLeave}
            >
              {isHovering ? (
                <FullAddress>{account}</FullAddress>
              ) : (
                <ShortAddress>{getShortAddres(account)}</ShortAddress>
              )}
            </span>

            <MetamaskButton onClick={disconnectFromMetamask}>
              <Icon icon="logos:metamask-icon" width="50" />
              <span className="material-symbols-outlined">logout</span>
            </MetamaskButton>
          </AccountInfo>
        ) : (
          <MetamaskContainer>
            <MetamaskButton onClick={connectToMetamask}>
              <Icon icon="logos:metamask-icon" width="50" />
              <span className="material-symbols-outlined">login</span>
            </MetamaskButton>
          </MetamaskContainer>
        )}
      </>
    </HeaderContainer>
  );
};
