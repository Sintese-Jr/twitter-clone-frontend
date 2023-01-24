import React, { useState } from "react";
import "../../../styles/cardperfil.css"
import BotaoAzul from "../../utilities/BotaoAzul";

export default function InfoBar(props) {
    const [seguiu, setSeguiu] = useState(false);

    function handleClick() {
        if(seguiu)setSeguiu(false);
        else setSeguiu(true);
    }
    return (
        <div className="infobar">
            <div className="pessoalinfo">
                <p className="nomeuser">{props.nomeuser}</p>
                <p className="followinguser"><span>{props.followingnomeuser}</span> Following</p>
                <p className="followersuser"><span>{props.followersuser}</span> Followers</p>
            </div>
            <div onClick={handleClick} className="botao-azul">
                {seguiu === false && <BotaoAzul texto="Seguir" icone="fa-solid fa-user-plus" />}
                {seguiu === true && <BotaoAzul texto="Seguindo"  />}
            </div>
        </div>
    );
}