import React from "react";
import "../../styles/botaoAzul.css"

export default function BotaoAzulPequeno(props) {
    return (
        <div className="botao-azul pequeno">
            <i className={props.icone}></i>
            <p className="texto-botao-azul">{props.texto}</p>
        </div>
    )
}

/*Nota para facilitar o uso
Caso nescessitar do icone de adicionar usuário em seu componente, passar como 
parâmetro na chamada do botão icone="fa-solid fa-user-plus". 
*/