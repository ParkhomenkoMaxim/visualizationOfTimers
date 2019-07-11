// Отображение аватара ,модального окна и реализация смены аватара.

import React, { Component } from "react";
import styles from '../cssModules/Avatar.css';
import Avatar from '../Components/Avatar';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class Mask extends Component {
constructor(props) {
    super(props);
    this.state = {
      modal: false,
      handleAvatar: "",
      activeAvatar: 'activeAvatar avatar1'
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
// ф-я для закрепления индикатора выбора аватара
  choiceIndicator(stateHandleAvatar,thisHandleAvatar) {
  	var greenBorder = {border: '8px solid green'};
		if (stateHandleAvatar === thisHandleAvatar){return greenBorder};
    }

  render() {
    return (
      <div>  

		<Avatar activeAvatar = {this.state.activeAvatar}   //картинка аватара
		 		shadowColor = {this.props.shadowColor}     //свечение
		  />
		{/* Отвечает за эффект наведения на аватар*/}
		<div className = "avatarPosition"> 
        	<div className = "mask" onClick={this.toggle}></div>
		</div>
{/* Модальное окно*/}

	 <Modal isOpen={this.state.modal} toggle={this.toggle} className = "modalspace" backdrop = {false}>

          <ModalHeader toggle={this.toggle} charCode="X" className = "modalheader">
          <small className = "modalheadertext">Choose game avatar</small>
          </ModalHeader>

          <ModalBody className = "modalbody">

            <div className = "container">

			  <div className = "row">
			    <div className = "col-md avatar avatar1" 
			    	//Сохраняет в стэйте выбранный аватар для последующего присвоения кнопкой
					 onClick={() => {this.setState({ handleAvatar: 'activeAvatar avatar1' });}}
					 //Применяет ф-ю закрепления индикатора выбора
					 style = {this.choiceIndicator(this.state.handleAvatar,'activeAvatar avatar1')}></div>
				<div className = "col-md avatar avatar2" 
					 onClick={() => {this.setState({ handleAvatar: 'activeAvatar avatar2' });}}
					 style = {this.choiceIndicator(this.state.handleAvatar,'activeAvatar avatar2')}></div>
				<div className = "col-md avatar avatar3"
				 	 onClick={() => {this.setState({ handleAvatar: 'activeAvatar avatar3' });}}
				 	 style = {this.choiceIndicator(this.state.handleAvatar,'activeAvatar avatar3')}></div>
				<div className = "col-md avatar avatar4"
				 	 onClick={() => {this.setState({ handleAvatar: 'activeAvatar avatar4' });}}
				 	 style = {this.choiceIndicator(this.state.handleAvatar,'activeAvatar avatar4')}></div>
			  </div>

			  <div className = "row">
			    <div className = "col-md avatar avatar5"
			     	 onClick={() => {this.setState({ handleAvatar: 'activeAvatar avatar5' });}}
			     	 style = {this.choiceIndicator(this.state.handleAvatar,'activeAvatar avatar5')}></div>
				<div className = "col-md avatar avatar6"
				 	 onClick={() => {this.setState({ handleAvatar: 'activeAvatar avatar6' });}}
				 	 style = {this.choiceIndicator(this.state.handleAvatar,'activeAvatar avatar6')}></div>
				<div className = "col-md avatar avatar7"
				 	 onClick={() => {this.setState({ handleAvatar: 'activeAvatar avatar7' });}}
				 	 style = {this.choiceIndicator(this.state.handleAvatar,'activeAvatar avatar7')}></div>
				<div className = "col-md avatar avatar8"
				 	 onClick={() => {this.setState({ handleAvatar: 'activeAvatar avatar8' });}}
				 	 style = {this.choiceIndicator(this.state.handleAvatar,'activeAvatar avatar8')}></div>
			  </div>

            </div>

          </ModalBody>

          <ModalFooter className = "modalfooter d-flex justify-content-center">
            <Button color="success" className = "saveButton"
             onClick={() => {this.setState({ activeAvatar: this.state.handleAvatar })}}>Save</Button>
          </ModalFooter>

     </Modal>

      </div>
    );
  }
}


export default Mask;