import React from "react";
import "../../styles/respostaTweet.css";
import FotoPerfil from './RespostaTweetComponents/FotoPerfil';
import EspacoResposta from './RespostaTweetComponents/EspacoResposta';
import EspacoLikes from './RespostaTweetComponents/EspacoLikes';
import imgSrc from './images/fotoPerfil.jpg'

export default function RespostaTweet(props) {

    return (
        <div className="respostaTweet">
            <FotoPerfil imgSrc={imgSrc}/>
            <div className="respostaELikes">
                <EspacoResposta
                    nome="Bianca Sosa"
                    data="24 August at 20:43"
                    texto="I've felt this pull many times, like while road tripping through Morrocco.
                    Seeking out the vastness of the desert, and looking inward at the same time."
                />
                <EspacoLikes 
                    liked="liked"
                    textoLiked="Liked"
                    qtdLikes="12k"
                />
            </div>
        </div>
    );
}