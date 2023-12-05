import logo from './logo.svg';
import './App.css';
import React from 'react';
import ApiComponent from './ApiComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
      <h1>API Consumer App</h1>
      <ApiComponent apiUrl="https://api.example.com/endpoint1" buttonText="Consultar API 1" />
      <ApiComponent apiUrl="https://api.example.com/endpoint2" buttonText="Consultar API 2" />
      <ApiComponent apiUrl="https://api.example.com/endpoint3" buttonText="Consultar API 3" />
    </div>
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


