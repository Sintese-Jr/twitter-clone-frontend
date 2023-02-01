import React from "react";
import "../../styles/cardperfil.css"
import Description from "./UserDisplayComponents/Description";
import ImagemPerfil from "./UserDisplayComponents/ImagemPerfil";
import InfoBar from "./UserDisplayComponents/InfoBar";

export default function UserDisplay(props) {


    return (
        <div className="userdisplay">
            <ImagemPerfil /> <InfoBar
                nomeuser="Daniela Jensen"
                followingnomeuser="1,370"
                followersuser="10,5k"
            />

            <Description descricao="Sempre é um belo dia para uma boa leitura" />
        </div>
    );
}