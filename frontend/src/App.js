import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import firebase from "./backend/firebase";
import { addToCollection, test } from "./backend/testconnection";

class App extends Component {
  constructor(props) {
    super(props);
    console.log(firebase);
  }

  componentDidMount() {
    firebase
      .auth()
      .signInAnonymously()
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
    addToCollection();
    test();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
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
}

export default App;
