import React from 'react';
import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';
import Web3 from 'web3';

export const ConnectMetamask = () => {
    const [account, setAccount] = useState();
    const [connected, setConnected] = useState(false);


    useEffect(() => {
        getCurrentAccount();
        addAccountListener();
    }, []);

    const connectToMetamask = async () => {
        if (typeof window != "undefined" && typeof window.ethereum !="undefined") {
            try {
                
                
                const web3 = new Web3(window.ethereum);
                const accounts = await web3.eth.requestAccounts();
                const account = accounts[0];
                console.log("Current account:", account);
                setAccount(account);
                setConnected(true)
            } catch (error) {
                console.error("User denied account access")
            }
        } else {
            console.error('No Metamask detected')
        }
    };

    
    const getCurrentAccount = async () => {
        if (typeof window != "undefined" && typeof window.ethereum !="undefined") {
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_accounts",
                })
                if (accounts.length > 0) {
                    const account = accounts[0];
                    console.log("Current account:", account);
                    setAccount(account);
                    setConnected(true)
                } else {
                    console.log("connect using button");
                }
               
             
            } catch (error) {
                console.error("User denied account access")
            }
        } else {
            console.error('No Metamask detected')
        }
    };
    const addAccountListener = async () => {
        if (typeof window != "undefined" && typeof window.ethereum !="undefined") {
            window.ethereum.on("accountsChanged", (accounts) => {
                setAccount(accounts[0])
                console.log(accounts[0]);
            })
        } else {
            setAccount("")
            setConnected(false)
            console.error('No Metamask detected')
        }
    };

    
    return (
        <div>
            {account && connected ? (
                <h4>{`inlogged ${account}`}</h4>
               
            ):(
                
                <button onClick={connectToMetamask} >
                <Icon icon="logos:metamask-icon" width="50" />
                connnect
            </button>
            )
            }
        </div>
    )
}
