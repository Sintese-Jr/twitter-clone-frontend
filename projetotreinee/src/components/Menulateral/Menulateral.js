import '../../styles/Menulateral.css';
import React from 'react';

function Menulateral(props) {
  return (
    <div className="container-menu">
        <div classNameName="container2">
            <p className="tweets">{props.primeiro}</p>  
        </div>
        <div className="container2">
            <p className="tweets2">{props.segundo}</p>
        </div>  
        <div className="container2">
            <p className="tweets2">{props.terceiro}</p>
        </div>
        <div className="container2">
            <p className="tweets2">{props.quarto}</p>
        </div>
    </div>
  );
}

export default Menulateral;
