// Отображение свечения и фоновой картинки основного аватара

import React, { Component } from "react";


function shadowColorSwitcher(value) {
	const green = {filter: 'drop-shadow(0 0 15px #4e9101)'};
  const orange = {filter: 'drop-shadow(0 0 15px #db5701)'};
      if(value === "orange") {return orange;}
      else {return green;}
}

class Avatar extends Component {

  render() {
	var shadowColor = this.props.shadowColor;
    return (
      <div>  

	<div className = {this.props.activeAvatar} style = {shadowColorSwitcher(shadowColor)}></div>

      </div>
    );
  }
}

export default Avatar;