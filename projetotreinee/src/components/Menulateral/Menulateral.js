import '../../styles/Menulateral.css';
import React from 'react';

function Menulateral(props) {
  return (
    <div class="container-menu">
        <div class="container2">
            <p class="canto"></p>
            <p class="tweets">{props.primeiro}</p>  
        </div>
        <div class="container2">
            <p class="tweets2">{props.segundo}</p>
        </div>  
        <div class="container2">
            <p class="tweets2">{props.terceiro}</p>
        </div>
        <div class="container2">
            <p class="tweets2">{props.quarto}</p>
        </div>
    </div>
  );
}

export default Menulateral;
