import React, { useState } from "react";
import "../../styles/botaoAzul.css"



export default function BotaoAzulEstatico(props) {
    const [active, setActive] = useState(false);

    function handleClick() {
        setActive(!active);
    }

    return (
        <div className="botao-azul" onClick={handleClick}>
            {active === false && <i className={props.icone}></i>}
            {active === false && <p className="texto-botao-retweet">Seguir</p>}
            {active === true &&  <p className="texto-botao-retweet">Seguindo</p>}
        </div>
    )
}