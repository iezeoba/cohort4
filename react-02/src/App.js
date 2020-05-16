import React from 'react';
import logo from './logo.svg';
import menu from './svg/menu.svg';
import lego from './svg/lego.svg';
import maps from './svg/maps.svg';
import gears from './svg/gears.svg';
import './App.css';
import Game from './components/Game';

// function App() {
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Welcome"
    }
    this.getValue = this.getValue.bind(this)
  }
  getValue(event) {
    if (event.target.id === "id-reactlogo") {
      this.setState({
        value: "This is the react icon"
      });
    }
    else if (event.target.id === "id-menu") {
      this.setState({
        value: "This is the menu icon"
      });
    }
    else if (event.target.id === "id-lego") {
      this.setState({
        value: "This is the tic-tac-toe game"
      });
    }
    else if (event.target.id === "id-maps") {
      this.setState({
        value: "This is the map icon"
      });
    }
    else if (event.target.id === "id-gears") {
      this.setState({
        value: "This is the settings icon"
      });
    }
  }


  render() {
    return (
      <div className="App">
        <img src={logo} className="My-logo" id="id-reactlogo" alt="react-logo" onClick={this.getValue} value={this.state.value} />
        <img src={menu} className="My-logo-rev" id="id-menu" alt="menu-logo" onClick={this.getValue} value={this.state.value} />
        <img src={lego} className="My-logo" id="id-lego" alt="lego-logo" onClick={this.getValue} value={this.state.value} />
        <img src={maps} className="My-logo" id="id-maps" alt="maps-logo" onClick={this.getValue} value={this.state.value} />
        <img src={gears} className="My-logo" id="id-gears" alt="gears-logo" onClick={this.getValue} value={this.state.value} />
        <header className="App-header">
          <Game />
          <h1>Hello World</h1>
          <p>{this.state.value}</p>
          <img src={logo} className="App-logo" alt="logo" />

          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >Learn React</a>
        </header>
      </div>
    );
  }
};

export default App;
