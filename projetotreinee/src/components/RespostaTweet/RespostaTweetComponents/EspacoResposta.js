import React from "react";
import "../../../styles/respostaTweet.css";
import InfoBarResposta from './EspacoRespostaComponents/InfoBarResposta';
import TextoResposta from './EspacoRespostaComponents/TextoResposta'
import {Link} from "react-router-dom"

export default function EspacoResposta (props) {
    return (
        <div className="espacoResposta">
            <Link to={`../perfil/${props.id}`}>
                <InfoBarResposta
                    nome={props.nome}
                    data={props.data}
                />
            </Link>
            <TextoResposta texto={props.texto}/>
        </div>
    )
} 