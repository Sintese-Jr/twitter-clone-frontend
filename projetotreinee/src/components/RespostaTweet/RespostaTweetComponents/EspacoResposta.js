import React from "react";
import "../../../styles/respostaTweet.css";
import InfoBarResposta from './EspacoRespostaComponents/InfoBarResposta';
import TextoResposta from './EspacoRespostaComponents/TextoResposta'

export default function EspacoResposta (props) {
    return (
        <div className="espacoResposta">
            <InfoBarResposta 
                nome={props.nome}
                data={props.data}
            />
            <TextoResposta texto={props.texto}/>
        </div>
    )
} 