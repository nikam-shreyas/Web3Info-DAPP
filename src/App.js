import React from 'react';
import './App.css';

import { useWeb3 } from '@openzeppelin/network/react';
import Web3Info from './components/Web3Info.js';


const infuraProjectId = '31b812de32c94d37b976492466f3e372';

function App() {

  const web3Context = useWeb3(`wss://mainnet.infura.io/ws/v3/${infuraProjectId}`);

  return (
    <div className="App">
      <div>
        <h1>Network Configurations:</h1>
        <Web3Info title="Web3 Info" web3Context={web3Context} />
      </div>
    </div>
  );
}

export default App;