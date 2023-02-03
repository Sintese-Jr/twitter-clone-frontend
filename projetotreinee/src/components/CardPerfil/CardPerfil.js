import React from "react";
import "../../styles/cardperfil.css"
import CapaDisplay from "./CapaDisplay";
import UserDisplay from "./UserDisplay";

export default function CardPerfil(props) {

    return (
        <div className="cardperfil">
            <CapaDisplay srcImagemCapa={props.srcImagemCapa}/>
            <UserDisplay 
                srcImagemPerfil={props.srcImagemPerfil}
                nomeuser={props.nomeuser}
                followingnomeuser={props.followingnomeuser}
                followersuser={props.followersuser}
                descricao={props.descricao}
            />
        </div>
    );
}