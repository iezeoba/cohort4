import React from 'react';
import logo from './logo.svg';
import dolphin from './dolphin.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={dolphin} className="My-logo" alt="logo" />
      <img src={dolphin} className="My-logo" alt="logo" />      
      <header className="App-header">
      <h1>Hello World</h1>
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
