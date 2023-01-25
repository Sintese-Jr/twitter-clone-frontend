import React from "react";
import "../../styles/Tweet.css"
import RespostaTweet from "../RespostaTweet/RespostaTweet"
import {Link} from "react-router-dom"

export default function Tweet(props) {

    const imagemPerfil = require(`../../images/fotoPerfil/${props.fotoPerfil}`);
    const imagemPost = require(`../../images/imagensPosts/${props.imagem}`);

    return (
        <div className="tweet">
            <div className="conteudoPost">
                <Link to="/perfil">
                    <div className="header-post">
                        <div className="avatar">
                            <img src={imagemPerfil}/>
                        </div>
                        <div className="userPost">
                            <h4>{props.nome}</h4>
                            <span>{props.date}</span>
                        </div>
                    </div>
                </Link>
                <p className="textoPost">{props.text}</p>
                <div className = "imagemPost">
                    <img src={imagemPost}/>
                    <span>{props.comments} comments</span>
                    <span>{props.retweets} Retweets</span>
                    <span>{props.saves} saved</span>
                </div>
                <div className = "iconesPost">
                    <div><i className="far fa-comment"></i><span>Comments</span> </div>
                    <div><i className="fa-solid fa-retweet"></i><span>Retweets</span></div>
                    <div><i className="fa-regular fa-heart"></i><span> Likes</span></div>
                    <div><i className="fa-regular fa-bookmark"></i><span> Saved</span></div>
                </div>
                <div className="comment">
                    <div className="imageComment">
                        <img src={imagemPerfil}/>
                    </div>
                    <div className="conteudoComment">
                        <form action="...">
                             <input type="text" id="comentario" placeholder="Tweet your reply"/>
                                <i className="fa-regular fa-image"></i>
                        </form>
                    </div>
                </div>
                <RespostaTweet />
            </div>
        </div>
    );
}