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
import MenuMobile from "../components/MenuMobile/menuMobile";

export default function HomePage() {

    const tweetsRecomendados = [...users["root"].tweetsFollowing];
    const listaTweets = tweetsRecomendados.map(tweetId => {
        const usuario = users[tweetsDB[tweetId].writerId];
        const dados = {...tweetsDB[tweetId], 
            "nome": usuario.nome,
            "fotoPerfil": usuario.fotoPerfil,
            "fotoUsuarioLogado": users["root"].fotoPerfil,
        }
        return <Tweet 
            key={tweetId}
            {...dados}
        />
    });

    return (
        <body>
            <Header 
                tipo="home"
                nome={users["root"].nome} 
                fotoPerfil={users["root"].fotoPerfil}
            />
            <div className="corpo-principal-home">
                <div className="tweet-tamanho-home">
                    <Tweetar 
                    fotoPerfil={users["root"].fotoPerfil}/>
                    <RetweetTag nome="Daniela Jensen" />
                    {listaTweets}
                </div>
                <div className="lateral-esquerda">
                    <Trends 
                    trends={users["root"].trends}/>
                    <div className="quem-seguir">
                        <QuemSeguir 
                            sugests = {[...users["root"].followSugestions]}
                        />
                    </div>
                </div>
                <MenuMobile
                    tipo="home"
                />
            </div>
        </body>
    )
}