// Компонент для отрисовки колец таймера
//(зря я отказался от css-реализации она оказалась проще особенно в плане анимации)

import React from "react";
import styles from '../cssModules/TimerCircle.css';

class TimerCircle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const progressColor = this.props.color;
    const sqSize = this.props.sqSize; // размер стороны квадрата
    const strokeWidth = this.props.strokeWidth;
    const radius = (this.props.sqSize - this.props.strokeWidth) / 2;  // для вписания круга в квадрат
    const viewBox = `0 0 ${sqSize} ${sqSize}`; // задаем размер квадрата отрисовки
    const dashArray = radius * Math.PI * 2; //длина дуги при полном покрытии равна окружности круга
    const dashOffset = dashArray + dashArray * this.props.percentage / 100; // скалирование наложения с нужным процентом

    return (
     
        <svg className = "svg"
          width={this.props.sqSize}
          height={this.props.sqSize}
          viewBox={viewBox}>
          <circle  
            className="circle-background"
            cx={(this.props.sqSize / 2)}
            cy={(this.props.sqSize / 2)}
            r={radius-1}
            strokeWidth={`${this.props.strokeWidth - 2.5}px`} />
          <circle
            className="circle-inner"
            cx={(this.props.sqSize / 2)}
            cy={(this.props.sqSize / 2)}
            r={radius-`${this.props.strokeWidth}`}
            strokeWidth={`${this.props.strokeWidth}px`} />
          <circle
            className="circle-progress"
            cx={(this.props.sqSize / 2)}
            cy={(this.props.sqSize / 2)}
            r={radius}
            strokeWidth={`${this.props.strokeWidth}px`}
            // начало на 12 часов ход по часовой стрелке
            transform={`rotate(-90 ${this.props.sqSize / 2} ${this.props.sqSize / 2})`}
            style={{
              stroke: progressColor,
              strokeDasharray: dashArray,
              strokeDashoffset: dashOffset
            }} /> 
        </svg>
 
    );
  }
}

export default TimerCircle;
