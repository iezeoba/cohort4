import React from 'react';
import logo from './logo.svg';
import './App.css';

//function App() {
class App extends React.Component {  
  constructor() { 
    super();
    this.counter = 21;
}

render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World</h1>
        <h2>I am in control of this application and my name is Ifeanyi {this.counter}</h2>
        <button onClick={this.onPushMe}>Push Me</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link"
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
}

export default App;
