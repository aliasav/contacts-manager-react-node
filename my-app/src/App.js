import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contacts, { SearchBar } from './Contacts';
import Search from './Contacts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Contact Manager</h1>
        </header>
        <p className="App-intro">
          Here are your Contacts!
        </p>
        <Contacts></Contacts>
        <br />
        <p className="App-intro">
          Search For Contacts
        </p>
        {/* <Search></Search> */}
        <SearchBar></SearchBar>
        
      </div>
    );
  }
}



export default App;
