import '../../styles/WhoCanReply.css';
import Caixas from './Caixas';
import React, { useState } from 'react';



function WhoCanReply(props) {

  const sendData = () => {
    props.handleData('giba');
  }
  
  return (
    <div className="App">
      <div className='container'>
        <p className= 'who'>Who can reply?</p>
        <p className='choose'>Choose who can reply to this Tweet.</p>
        <Caixas onClick={sendData}
         everyone = 'Everyone' 
         icone = "fa-globe"/> 
         
        <Caixas 
         everyone = 'People you follow'
         icone = "fa-user-group"
        />
      </div>
    </div>
  );
}

export default WhoCanReply;
