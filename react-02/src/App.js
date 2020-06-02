import React from 'react';
import './App.css';
import Game from './components/Game';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Account from './components/BankApp/Account';

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
    let idHome = document.getElementById("home");
    let idGame = document.getElementById("game");
    let idAccount = document.getElementById("account");
    if (event.target.id === "id-reactlogo") {
      this.setState({
        value: "This is the react icon"
      });
      idHome.style.display = "block";
      idGame.style.display = "none";
      idAccount.style.display = "none";
    }
    else if (event.target.id === "id-lego") {
      this.setState({
        value: "This is the tic-tac-toe game"
      });
      idHome.style.display = "none";
      idGame.style.display = "block";
      idAccount.style.display = "none";
    }
    else if (event.target.id === "id-menu") {
      this.setState({
        value: "This is the menu icon"
      });
      idHome.style.display = "none";
      idGame.style.display = "none";
      idAccount.style.display = "block";
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
        <div>
          <Navbar onClick={this.getValue} />
        </div>
        <div id="home" style={{ display: "block" }}>
          <Home value={this.state.value} />
        </div>
        <div id="game" style={{ display: "none" }}>
          <Game />
        </div>
        <div id="account" style={{ display: "none" }}>
          <Account />
        </div>
      </div>
    );
  }
};
export default App;
