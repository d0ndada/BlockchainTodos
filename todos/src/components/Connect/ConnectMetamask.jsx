import React from 'react'
import { Icon } from '@iconify/react';
import { useState } from 'react';
import Web3 from 'web3';

export const ConnectMetamask = () => {
    const [account,setAccount] = useState();
    

    const getAccounts = async () => {
        if(window.ethereum) {
            try {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                window.web3 = new Web3(window.ethereum);
                const accounts = await window.web3.eth.getAccounts();
                const currentAccount = accounts[0];
                console.log("Current account:", currentAccount);
                setAccount(currentAccount)

        }catch (error) {
            console.error("User denied account access")
          }
          } else {
            console.error('No Metamask detected')
          }
        };
  return (
    <div>
        <button onClick={getAccounts} >
            <h4>
                <Icon icon="logos:metamask-icon" width="50" />
                Connect with Metamask
            </h4>
        </button>
    </div>
  )
}
