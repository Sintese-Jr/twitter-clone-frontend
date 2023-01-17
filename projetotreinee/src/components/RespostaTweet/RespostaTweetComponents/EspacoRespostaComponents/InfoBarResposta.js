import React from "react";
import "../../../../styles/respostaTweet.css";

export default function InfoBarResposta (props) {
    return (
        <div className="infoBarResposta">
            <p className="nomeRespondente">{props.nome}</p>
            <p className="dataResposta">{props.data}</p>
        </div>
    )
}