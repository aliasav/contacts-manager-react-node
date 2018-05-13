import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contacts, { SearchBar } from './Contacts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Contact Manager</h1>
        </header>
        <p className="App-intro">
          <b>Here are all your Contacts </b>
        </p>
        <Contacts></Contacts>
        <br />
        <p className="App-intro">
          <b>Search For Contacts </b>
        </p>
        <SearchBar></SearchBar>
      </div>
    );
  }
}



export default App;
