import React from "react";
import "../../../styles/MenuPerfil.css"

export default function CardMenu(props) {
    return (
        <li className={"cardmenu " + props.cor}>
            <div className="iconemenu">
                <i className={props.icone}></i>
            </div>
            <p>{props.texto}</p>
        </li>
    )
}