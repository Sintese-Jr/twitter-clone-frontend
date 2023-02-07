import '../../styles/WhoCanReply.css';
import Caixas from './Caixas';
import React, { useState } from 'react';



function WhoCanReply({childToParent}) {
  const everyone = "everyone";
  
  
  const data = "gibao ";
  
  return (
    <div className="App">
      <div className='container'>
        <p className= 'who'>Who can reply?</p>
        <p className='choose'>Choose who can reply to this Tweet.</p>
        <Caixas onClick={()=> childToParent(everyone)}
         everyone = 'Everyone' 
         icone = "fa-globe"/> 
         
        <Caixas onClick={}
         everyone = 'People you follow'
         icone = "fa-user-group"
        />
      </div>
    </div>
  );
}

export default WhoCanReply;
