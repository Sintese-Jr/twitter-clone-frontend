import React from "react";
import "../../styles/botaoTweet.css"

export default function BotaoTweet(props) {
    return (
        <div className={props.cor}>
            <div className="botao-retweet">
                <i className={props.icone}></i>
                <p className="texto-botao-retweet">{props.texto}</p>
            </div>
        </div>
    )
}

/*Nota para facilitar o uso
Caso nescessitar do icone de adicionar usuário em seu componente, passar como 
parâmetro na chamada do botão icone="fa-solid fa-user-plus". 

Props.cor é utilizado em eventos em que é necessário mudar a cor do botão.
Caso a cor não esteja definida, é necessário cria-la no CSS.
*/