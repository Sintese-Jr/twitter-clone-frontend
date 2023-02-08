import '../../styles/WhoCanReply.css';
import Caixas from './Caixas';
import React, { useState } from 'react';

function WhoCanReply({ setOption, options }) {
  return (
    <div className="App">
      <div className='containerwhocanreply'>
        <p className='who'>Who can reply?</p>
        <p className='choose'>Choose who can reply to this Tweet.</p>
        {options.map(option => <Caixas handleClick={setOption} option={option} />)}
      </div>
    </div>
  );
}

export default WhoCanReply;
