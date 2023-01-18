import React from "react";
import "../../styles/Tweetar.css"
import Perfil from "./images/perfil.jpg"

export default function Tweetar() {
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
                    <img src={Perfil}/> 
                </div>
                <input type="text" placeholder="What's happening?"/>
            </div>
            <div className="bottom-part">
            <i className="fa-regular fa-image"></i><span></span>
            <i className="fa-solid fa-earth-americas"></i> <span> Everyone can reply</span>
            <button>Tweet</button>
            </div>    
         </div>     
   );
}