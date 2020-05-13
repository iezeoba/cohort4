import React from 'react';
import logo from './logo.svg';
import menu from './svg/menu.svg';
import lego from './svg/lego.svg';
import maps from './svg/maps.svg';
import gears from './svg/gears.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={menu} className="My-logo-rev" alt="menu-logo" />
      <img src={lego} className="My-logo" alt="lego-logo" />
      <img src={maps} className="My-logo" alt="maps-logo" /> 
      <img src={gears} className="My-logo" alt="gears-logo" />     
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
