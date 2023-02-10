import React, { useEffect, useRef, useState } from "react";
import WhoCanReply from "../WhoCanReply/WhoCanReply.js";
import "../../styles/Tweetar.css";

export default function Tweetar(props) {
  const imagemPerfil = require(`../../images/fotoPerfil/${props.fotoPerfil}`);
  const [active, setActive] = useState(false);

  const options = [
    {
      label: "Everyone",
      value: "everyone",
      icon: "fa-earth-americas",
    },
    {
      label: "People you follow",
      value: "followers",
      icon: "fa-user-group",
    },
  ];
  const [option, setOption] = useState(options[0]);

  function handleClick() {
    setActive(!active);
  }

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
          <i className="fa-regular fa-image"></i>
          <span></span>
          <div className="everyonecanreply" onClick={handleClick}>
            <i className={`fa-solid ${option.icon}`}></i><span>{option.label}</span>
          </div>
        </div>
        <button className="botao-tweetar">Tweet</button>
      </div>
      <div className="who-can-reply" onClick={handleClick}>
        {active === true && <WhoCanReply setOption={setOption} options={options} />}
      </div>
    </div>
  );

}

