import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import LoginPage from './pages/LoginPage/LoginPage';
import {
  ReactDOM,
  Route,
  Link,
  Switch,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>TravelNow</h1>
       <NavBar />
      </header>
     

    </div>
  );
}

export default App;
