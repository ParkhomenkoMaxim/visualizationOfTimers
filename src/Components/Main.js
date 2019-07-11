// Не самый нужный компонент который просто центрирует таймер.

import React, { Component } from "react";
import styles from '../cssModules/Main.css';
import Timer from '../Components/Timer';

class Main extends Component {




  render() {
    return (
     <div className = "vertical-center">

      <Timer localDuration = "5" globalDuration = "10" />
       
     </div>
    );
  }
}


export default Main;

 

