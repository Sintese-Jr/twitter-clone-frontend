import React from "react";
import "../styles/PerfilPage.css"
import Header from "../components/Header/header.js"
import CardPerfil from "../components/CardPerfil/CardPerfil"
import Menulateral from "../components/Menulateral/Menulateral";
import Tweet from "../components/Tweet/Tweet.js"

export default function Perfil() {
    return (
        <body>
            <div className="corpo-principal">
                <Menulateral />
                <div className="tweet-tamanho">
                    <Tweet/>
                </div>
            </div>
        </body>
    )
}