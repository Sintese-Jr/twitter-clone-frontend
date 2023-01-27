import React from "react";
import "../../styles/Tweetar.css"

export default function Tweetar(props) {

    const imagemPerfil = require(`../../images/fotoPerfil/${props.fotoPerfil}`);

    return (
        <div className= "tweetar">
            <div class="feeds-content">
                <div class="feeds-header"> 
                    <div class="header-top">
                        <h4>Tweet Something</h4>
                    </div>
                </div>
            </div>
            <div className="header-post">
                <div class="header-img-wrapper">
                    <img src={imagemPerfil}/> 
                    <input type="text" placeholder="What's happening?"/>
                </div>
            </div>
            <div className="bottom-part">
                <div className="area-icone-tweetar">
                    <i className="fa-regular fa-image"></i><span></span>
                    <div className="everyonecanreply">
                        <i className="fa-solid fa-earth-americas"></i> <span> Everyone can reply</span>
                    </div>
                </div>
                <button>Tweet</button>
            </div>    
         </div>     
   );
}