import React, { useState } from "react";
import "../../../styles/cardperfil.css"
import BotaoAzul from "../../utilities/BotaoAzul";
import { FollowList } from "../../FollowList/FollowList";

export default function InfoBar(props) {
    const [seguiu, setSeguiu] = useState(false);
    const [showFollowing, setShowFollowing] = useState(false);

    function handleClickFollowing() {
        setShowFollowing(!showFollowing);
    }
    
    function handleHover(){
        setShowFollowing(false);
    }

    function handleClick() {
        if (seguiu) setSeguiu(false);
        else setSeguiu(true);
    }
    return (
        <div className="infobar">

            {showFollowing === true && <FollowList open={true}/>}

            <div className="pessoalinfo">
                <p className="nomeuser">{props.nomeuser}</p>
                <div className="followers">
                    <p className="followinguser" onMouseEnter={handleHover} onClick={handleClickFollowing}><span>{props.followingnomeuser}</span> Following</p>

                    <p className="followersuser"><span>{props.followersuser}</span> Followers</p>
                </div>
            </div>
            <div onClick={handleClick} className="botao">
                {seguiu === false && <BotaoAzul texto="Seguir" icone="fa-solid fa-user-plus" />}
                {seguiu === true && <BotaoAzul texto="Seguindo" />}
            </div>
        </div>
    );
}