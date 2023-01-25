import React, { useState } from "react";
import "../../styles/respostaTweet.css";
import FotoPerfil from './RespostaTweetComponents/FotoPerfil';
import EspacoResposta from './RespostaTweetComponents/EspacoResposta';
import EspacoLikes from './RespostaTweetComponents/EspacoLikes';
import imgSrc from './images/fotoPerfil.jpg'

export default function RespostaTweet(props) {
    const [curtiu, setCurtiu] = useState(false);

    function handleClick() {
        if (curtiu) setCurtiu(false);
        else setCurtiu(true);
    }

    return (
        <div className="respostaTweet">
            <FotoPerfil imgSrc={imgSrc} />
            <div className="respostaELikes">
                <EspacoResposta
                    nome="Bianca Sosa"
                    data="24 August at 20:43"
                    texto="I've felt this pull many times, like while road tripping through Morrocco.
                    Seeking out the vastness of the desert, and looking inward at the same time."
                />
                <div className="botaoLike"  onClick={handleClick}>
                    {curtiu === false && <EspacoLikes liked="notLiked" qtdLikes="48k" textoLiked="Like" />}
                    {curtiu === true && <EspacoLikes liked="liked" qtdLikes="48k" textoLiked="Liked" />}
                </div>
            </div>
        </div>
    );
}