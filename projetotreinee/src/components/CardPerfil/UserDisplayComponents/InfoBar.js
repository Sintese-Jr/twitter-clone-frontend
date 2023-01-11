import React from "react";
import "../../../styles/cardperfil.css"
import BotaoAzul from "../../utilities/BotaoAzul";

export default function InfoBar(props) {

    return (
        <div className="infobar">
            <div className="pessoalinfo">
                <p className="nomeuser">{props.nomeuser}</p>
                <p className="followinguser"><span>{props.followingnomeuser}</span> Following</p>
                <p className="followersuser"><span>{props.followersuser}</span> Followers</p>
            </div>
            <BotaoAzul texto="Follow" icone="fa-solid fa-user-plus"/>
        </div>
    );
}