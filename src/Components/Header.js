import React, { Component } from "react";


class Header extends Component {

  render() {
    return (
      <div className = "fixed-top">         
            <div className = "container mt-3 mb-1">
              <div className = "row">

                 <div className = "d-flex col-sm justify-content-start">
                    <h2><strong><ins>PLACEHOLDER</ins></strong></h2>
                 </div>

                 <div className = "d-flex col-sm justify-content-end">  
                   <a href = "https://sinoptik.ua/" target="_blank"  rel="noopener noreferrer" className = "link">
                     <small>Link</small>
                   </a>
                 </div> 

              </div>
            </div>
              <hr style={{margin: '0% 9% 1%'}}/> 
      </div>
    );
  }
}


export default Header;