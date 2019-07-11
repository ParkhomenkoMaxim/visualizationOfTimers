import React, { Component } from "react";


class Footer extends Component {

  render() {
    return (
      <div className = "fixed-bottom">        
        <hr style={{margin: '1% 9% 0%'}}/>  
            <div className = "container">
              <div className = "row">

                 <div className = "d-flex col-sm justify-content-start">
                    <small>PLACEHOLDER<br />
                    Some additional information  </small>
                 </div>

                 <div className = "d-flex col-sm justify-content-end">  
                   <p><small> Another additional information<br />
                   <p className = "d-flex justify-content-end">14540763</p></small> </p>
                 </div> 

              </div>
            </div>
      </div>
    );
  }
}


export default Footer;