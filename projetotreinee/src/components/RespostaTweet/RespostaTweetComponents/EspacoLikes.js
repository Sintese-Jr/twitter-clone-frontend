import React from "react";
import "../../../styles/respostaTweet.css";

export default function EspacoLikes (props) {
    return (
        <div className="espacoLikes">
            <span className={props.liked}>
                <i class="fa-regular fa-heart"></i>
                <p>{props.textoLiked}</p>
            </span>
            <p>{props.qtdLikes} Likes</p>
        </div>
    )
}