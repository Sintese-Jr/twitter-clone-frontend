import React from "react";
import "../../../styles/respostaTweet.css";

export default function FotoPerfil(props) {
    return (
        <div className="fotoPerfil">
            <img src={props.imgSrc}></img>
        </div>
    );
}