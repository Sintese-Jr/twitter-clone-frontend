import React from "react";
import "../../styles/cardperfil.css"
import Description from "./UserDisplayComponents/Description";
import ImagemPerfil from "./UserDisplayComponents/ImagemPerfil";
import InfoBar from "./UserDisplayComponents/InfoBar";

export default function UserDisplay(props) {

    return (
        <div className="userdisplay">

            <ImagemPerfil srcImagemPerfil={props.srcImagemPerfil}/>
            <InfoBar
                nomeuser={props.nomeuser}
                followingnomeuser={props.followingnomeuser}
                followersuser={props.followersuser}
            />
            <Description descricao={props.descricao}/>

        </div>
    );
}