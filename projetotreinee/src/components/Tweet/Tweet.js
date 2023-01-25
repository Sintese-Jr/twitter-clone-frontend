import React, { useState } from 'react';
import "../../styles/Tweet.css"
import Perfil from "./images/perfil.jpg"
import Post from "./images/imagemPost.png"
import RespostaTweet from "../RespostaTweet/RespostaTweet"
import { Link } from "react-router-dom"
import BotaoTweet from '../utilities/BotaoTweet';

export default function Tweet() {
    const [curtiu, setCurtiu] = useState(false);
    const [retweetou, setRetweet] = useState(false);
    const [salvou, setSalvou] = useState(false);

    function handleClickRetweet() {
        if (retweetou) setRetweet(false);
        else setRetweet(true);
    }
    function handleClickCurtir() {
        if (curtiu) setCurtiu(false);
        else setCurtiu(true);
    }

    function handleClickSalvou() {
        if (salvou) setSalvou(false);
        else setSalvou(true);
    }
    return (
        <div className="tweet">
            <div className="conteudoPost">
                <Link to="/perfil">
                    <div className="header-post">
                        <div className="avatar">
                            <img src={Perfil} alt="Foto de perfil" />
                        </div>
                        <div className="userPost">
                            <h4>Thomas Shelby</h4>
                            <span> 17 jan at 00:08</span>
                        </div>
                    </div>
                </Link>
                <p className="textoPost">Traveling- it leaves you speachless, then turns you into a storyteller.</p>
                <div className="imagemPost">
                    <img src={Post} alt="Imagem do post" />
                    <span>499 comments</span>
                    <span>59k Retweets</span>
                    <span>234 saved</span>
                </div>
                <div className="iconesPost">

                    <BotaoTweet icone="far fa-comment" texto="Comments" alt="Comentarios" />

                    <div onClick={handleClickRetweet} className="retweet">
                        {retweetou === false && <BotaoTweet icone="fa-solid fa-retweet" texto="Retweet" alt="Retweet" />}
                        {retweetou === true && <BotaoTweet className="retweeted" icone="fa-solid fa-retweet" cor="verde" texto="Retweeted" alt="Retweeted" />}
                    </div>
                    <div onClick={handleClickCurtir}>
                        {curtiu === false && <BotaoTweet icone="fa-regular fa-heart" texto="Like" alt="Likes" />}
                        {curtiu === true && <BotaoTweet icone="fa-regular fa-heart" cor="vermelho" texto="Liked" alt="Liked" />}
                    </div>
                    <div onClick={handleClickSalvou}>
                        {salvou === false && <BotaoTweet icone="fa-regular fa-bookmark" texto="Save" alt="Salvar" />}
                        {salvou === true && <BotaoTweet icone="fa-regular fa-bookmark" cor="azul" texto="Saved" alt="Salvo" />}
                    </div>

                </div>
                <div className="comment">
                    <div className="imageComment">
                        <img src={Perfil} alt="Foto de perfil na aba de comentarios" />
                    </div>
                    <div className="conteudoComment">
                        <form action="/">
                            <input type="text" id="comentario" placeholder="Tweet your reply" />
                            <i className="fa-regular fa-image"></i>
                        </form>
                    </div>
                </div>
                <RespostaTweet />
            </div>
        </div>
    );
}
