import React from "react";
import "../../styles/cardperfil.css"

export default function CapaDisplay(props) {

    return (
        <div className="imagemcapa">
            <img src={props.srcImagemCapa}></img>
        </div>
    )
}