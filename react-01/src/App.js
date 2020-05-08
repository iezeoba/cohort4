import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import EvenComponent from './components/EvenComponent';
import OddComponent from './components/OddComponent';

//function App() {
class App extends React.Component {  
  constructor() { 
    super();
    this.counter = 21;
    this.state = {
      myState: "TBD",
      myHeader: <MyComponent />
    };
}

onPushMe = () => {
  console.log("You pushed me");
  this.counter++;
  console.log(this.counter);
  this.setState({
    myState: "now:" + this.counter
  });
  ((this.counter % 2) > 0) ? this.setState({myHeader:<OddComponent />}) : this.setState({myHeader: <EvenComponent />});
}

render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {this.state.myHeader}
        <h1>Hello World</h1>
        <h2>I am in control of this application and my name is Ifeanyi {this.state.myState}</h2>
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
