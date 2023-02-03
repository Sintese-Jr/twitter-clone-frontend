import React, { useState } from "react";
import users from "../../mockData/users.json";
import tweetsDB from "../../mockData/tweetsDB.json";
import "../../styles/Tweet.css"
import RespostaTweet from "../RespostaTweet/RespostaTweet"
import { Link } from "react-router-dom"
import BotaoTweet from '../utilities/BotaoTweet';

export default function Tweet(props) {
    console.log(tweetsDB[props.tweetId].answers)
    const arrayResp = tweetsDB[props.tweetId].answers
    const imagemPerfil = require(`../../images/fotoPerfil/${props.fotoPerfil}`);
    const imagemPost = props.imagem ? require(`../../images/imagensPosts/${props.imagem}`) : null;
    const listaResp = arrayResp.map(elemento => {
        const usuarioResp = users[elemento.writerId]
        return <RespostaTweet
            image={usuarioResp.fotoPerfil}
            nome={usuarioResp.nome}
            data={elemento.datas}
            qtdLikes={elemento.likes}
            texto={elemento.aswer} />

    })

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
                <Link to={`/perfil/${props.writerId}`}>
                    <div className="header-post">
                        <div className="avatar">
                            <img src={imagemPerfil} />
                        </div>
                        <div className="userPost">
                            <h4>{props.nome}</h4>
                            <span>{props.date}</span>
                        </div>
                    </div>
                </Link>
                <p className="textoPost">{props.text}</p>
                <div className="imagemPost">
                    {imagemPost ? <img src={imagemPost} /> :
                        <br></br>}
                    <span>{props.comments} comments</span>
                    <span>{props.retweets} Retweets</span>
                    <span>{props.saves} saved</span>
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
                        <img src={imagemPerfil} />
                    </div>
                    <div className="conteudoComment">
                        <form action="...">
                            <input type="text" id="comentario" placeholder="Tweet your reply" />
                            <i className="fa-regular fa-image"></i>
                        </form>
                    </div>
                </div>
               {listaResp}
            </div>
        </div>
    );
}