import React, { useEffect, useRef, useState } from "react";
import WhoCanReply from "../WhoCanReply/WhoCanReply.js";
import "../../styles/Tweetar.css"

export default function Tweetar(props) {

    const imagemPerfil = require(`../../images/fotoPerfil/${props.fotoPerfil}`);
    const [active, setActive] = useState(false);
    const [data, setData] = useState('');

    const handleData = (receivedData) => {
        setData(receivedData);
    }


    function handleClick() {
        setActive(!active);
        console.log(data);

    };

    return (
        <div className="tweetar">
            <div class="feeds-content">
                <div class="feeds-header">
                    <div class="header-top">
                        <h4>Tweet Something</h4>
                    </div>
                </div>
            </div>
            <div className="header-post">
                <div class="header-img-wrapper">
                    <img src={imagemPerfil} />
                    <input type="text" placeholder="What's happening?" />
                </div>
            </div>
            <div className="bottom-part">
                <div className="area-icone-tweetar">
                    <i className="fa-regular fa-image"></i><span></span>
                    <div className="everyonecanreply" onClick={handleClick}>
                        <i className="fa-solid fa-earth-americas"></i> <span>{data}</span>
                    </div>
                </div>
                <button>Tweet</button>
            </div>
            <div className="who-can-reply" onClick={handleClick} >
                {active === true && <WhoCanReply handleData={handleData} />}
            </div>
        </div>

    );
}