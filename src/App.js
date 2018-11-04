import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import '../libraries/bootstrap.min.css'
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {
  render() {
    return (
      <CssBaseline />
      <div className="body">
        <header className="">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
            Let's try to make a react app. 
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
