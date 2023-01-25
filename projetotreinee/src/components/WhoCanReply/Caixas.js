import '../../styles/caixas.css'
import React from 'react';


export default function Caixas(props) {
    return (
        <div className="Caixas">
            <div className="Everyone">
            <i class= {"fa-solid "+props.icone}></i> 
             {props.everyone}
            </div>
        </div>
    );
}