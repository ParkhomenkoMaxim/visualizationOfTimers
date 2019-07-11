//Основной компонент где таймеры анимируются размещаются и получают некоторые стили
//Анимировал функциями которые уменьшают % заполнения на(0.5) и вызываются с расчетным периодом зависящим 
//от заданого времени

import React from "react";
import TimerCircle from '../Components/TimerCircle';
import Mask from '../Components/Mask';

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      percentage1: 100,
      percentage2: 100,
    };
  }

  componentDidMount() {
    // анимация локального таймера
    const localDuration = this.props.localDuration;  
  
    if(this.state.percentage1 > 0.1) {
      setInterval(
        () => {this.decreasePercentage1(0.5)}, 
        this.intervalDelay(localDuration));
    }     

  }

  componentWillUpdate() {
    //анимация глобального таймера
      const globalDuration = this.props.globalDuration;

    if (this.state.percentage1<1){ setTimeout(
        () => {this.decreasePercentage2(0.5)}, 
       this.intervalDelay(globalDuration)) }
  }


  //ф-и уменьшения процента заполнения которые вызываются выше
  decreasePercentage1(value) { if (this.state.percentage1 > 0) {
      this.setState({ percentage1: this.state.percentage1 - value }) }
  }

  decreasePercentage2(value) { if (this.state.percentage2 > 0) {
      this.setState({ percentage2: this.state.percentage2 - value }) }
  }
  //расчет задержки с которой должны вызываться функции выше чтобы анимация соответствовала таймеру
  intervalDelay (value) {
    return value * 1000 / 200
  }


  render() {
    return (
      <div className = "container">
      <div className = "row">

        <div className = "col-sm-1 offset-sm-2">
          <span>Local timer:</span>
          <TimerCircle
            color = "#4e9101"   // цвет прогрессбара
            strokeWidth = "5"   // ширина прогрессбара
            sqSize = "100"
            percentage = {this.state.percentage1}/>  
          <Mask shadowColor = "green" // картинка аватара и цвет свечения
          />
        </div>

        <div  className = "col-sm-1 ml-5 pl-3">
          <span>Global timer:</span>
          <TimerCircle 
            color = "#db5701"
            strokeWidth = "5"
            sqSize = "100"
            percentage = {this.state.percentage2}/>
          <Mask shadowColor = "orange"/>

        </div>

      </div>    
      </div>
    );
  }
}

export default Timer;
