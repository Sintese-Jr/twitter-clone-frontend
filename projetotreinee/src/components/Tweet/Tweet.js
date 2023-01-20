import React from "react";
import "../../styles/Tweet.css"
import Perfil from "./images/perfil.jpg"
import Post from "./images/imagemPost.png"

export default function Tweet() {

    return (
        <div className="tweet">
            <div className="conteudoPost">
                <div className="header-post">
                    <div className="avatar">
                        <img src={Perfil}/>
                    </div>
                    <div className="userPost">
                        <h4>Thomas Shelby</h4>
                        <span> 17 jan at 00:08</span>
                    </div>
                </div>
                <p className="textoPost">Traveling- it leaves you speachless, then turns you into a storyteller.</p>
                <div className = "imagemPost">
                    <img src={Post}/>
                    <span>499 comments</span>
                    <span>59k Retweets</span>
                    <span>234 saved</span>
                </div>
                <div className = "iconesPost">
                    <div><i className="far fa-comment"></i><span>Comments</span> </div>
                    <div><i className="fa-solid fa-retweet"></i><span>Retweets</span></div>
                    <div><i className="fa-regular fa-heart"></i><span> Likes</span></div>
                    <div><i className="fa-regular fa-bookmark"></i><span> Saved</span></div>
                </div>
                <div className="comment">
                    <div className="imageComment">
                        <img src={Perfil}/>
                    </div>
                    <div className="conteudoComment">
                        <form action="...">
                             <input type="text" id="comentario" placeholder="Tweet your reply"/>
                                <i className="fa-regular fa-image"></i>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}