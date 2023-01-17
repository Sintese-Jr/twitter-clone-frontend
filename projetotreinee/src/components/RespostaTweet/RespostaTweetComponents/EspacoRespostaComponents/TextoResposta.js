import React from "react";
import "../../../../styles/respostaTweet.css";

export default function TextoResposta (props) {
    return (
        <div className="textoResposta">
            <p>{props.texto}</p>
        </div>
    )
}