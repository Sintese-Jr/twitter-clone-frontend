import React from "react";
import "../../../styles/cardperfil.css"

export default function Description(props) {
    return (
        <div className="description">
            <p className="descriptiontext">{props.descricao}</p>
        </div>
    )
}