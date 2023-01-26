import '../../styles/WhoCanReply.css';
import Caixas from './Caixas';
import React from 'react';



function App() {
  return (
    <div className="App">
      <div className='container'>
        <p className= 'who'>Who can reply?</p>
        <p className='choose'>Choose who can reply to this Tweet.</p>
        <Caixas
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

export default App;
