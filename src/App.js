import React, { Component } from 'react';
import './App.css';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Header from './Components/Header';

class App extends Component {


  render() {
    return (
      <div className="App">
       <Header/>
       <Main/> 
       <Footer/>
      </div>
    );
  }
}

export default App;
