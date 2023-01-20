import React from "react";
import "../../styles/retweettag.css"

export default function RetweetTag(props) {
    return (
        <div className="retweet-tag">
            <i className="fa-solid fa-retweet"></i>
            <p>{props.nome} Retweeted</p>
        </div>
    )
}