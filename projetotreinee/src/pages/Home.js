import React from "react";
import "../styles/HomePage.css"
import Header from "../components/Header/header";
import Trends from "../components/Trends/trends"
import Tweet from "../components/Tweet/NewTweet.js"
import RetweetTag from "../components/utilities/RetweetTag";
import QuemSeguir from "../components/QuemSeguir/QuemSeguir";
import Tweetar from "../components/Tweetar/tweetar"
import users from "../mockData/users.json";
import tweetsDB from "../mockData/tweetsDB.json";

export default function HomePage() {

    const tweetsRecomendados = [...users["root"].tweetsFollowing];
    const listaTweets = tweetsRecomendados.map(tweetId => {
        const usuario = users[tweetsDB[tweetId].writerId];
        const dados = {...tweetsDB[tweetId], 
            "nome": usuario.nome,
            "fotoPerfil": usuario.fotoPerfil
        }
        return <Tweet 
            key={tweetId}
            {...dados}
        />
    });

    return (
        <body>
            <Header />
            <div className="corpo-principal-home">
                <div className="tweet-tamanho-home">
                    <Tweetar />
                    <RetweetTag nome="Daniela Jensen" />
                    {listaTweets}
                </div>
                <div className="lateral-esquerda">
                    <Trends 
                    trends={users["root"].trends}/>
                    <div className="quem-seguir">
                        <QuemSeguir />
                    </div>
                </div>
            </div>
        </body>
    )
}