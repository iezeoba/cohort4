import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';

//function App() {
class App extends React.Component {  
  constructor() { 
    super();
    this.counter = 21;
    this.state = {
      myState: "TBD"
    };
}
onPushMe = () => {
  console.log("You pushed me");
  this.counter++;
  console.log(this.counter);
  this.setState({
    myState: "now:" + this.counter
  });
}
render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World</h1>
        <h2>I am in control of this application and my name is Ifeanyi {this.state.myState}</h2>
        <button onClick={this.onPushMe}>Push Me</button>
        <MyComponent />
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
