import React from "react";
import "../../../styles/cardperfil.css"
import perfil from "../images/cardPerfil/fotoPerfil.jpg"

export default function ImagemPerfil(props) {
    return (
        <div className="imagemperfil">
            <img src={perfil}></img>
        </div>
    )
}