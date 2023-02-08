import React, { useState } from "react";
import "../../styles/respostaTweet.css";
import FotoPerfil from './RespostaTweetComponents/FotoPerfil';
import EspacoResposta from './RespostaTweetComponents/EspacoResposta';
import EspacoLikes from './RespostaTweetComponents/EspacoLikes';
import imgSrc from './images/fotoPerfil.jpg'

export default function RespostaTweet(props) {
    const imagePerfil = require(`../../images/fotoPerfil/${props.image}`);
    const [curtiu, setCurtiu] = useState(false);

    function handleClick() {
        if (curtiu) setCurtiu(false);
        else setCurtiu(true);
    }

    return (
        <div className="respostaTweet">
            <FotoPerfil imgSrc={imagePerfil}/> 
            <div className="respostaELikes">
                <EspacoResposta
                    nome={props.nome}
                    data={props.data}
                    texto={props.texto}
                    id={props.id}
                />
                <div className="botaoLike"  onClick={handleClick}>
                    {curtiu === false && <EspacoLikes liked="notLiked" qtdLikes={props.qtdLikes} textoLiked="Like" />}
                    {curtiu === true && <EspacoLikes liked="liked" qtdLikes={props.qtdLikes} textoLiked="Liked" />}
                </div>
            </div>
        </div>
    );
}