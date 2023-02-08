import React from "react";
import "../styles/BookmarkPage.css"
import "../styles/PerfilPage.css"
import Header from "../components/Header/header.js"
import Menulateral from "../components/Menulateral/Menulateral";
import Tweet from "../components/Tweet/NewTweet.js"
import users from "../mockData/users.json";
import tweetsDB from "../mockData/tweetsDB.json";
import MenuMobile from "../components/MenuMobile/menuMobile";
import RetweetTag from "../components/utilities/RetweetTag";
import QuemSeguir from "../components/QuemSeguir/QuemSeguir";
import Tweetar from "../components/Tweetar/tweetar"

export default function BookmarksPage() {
        const tweetsRecomendados = [...users["root"].saved];
        const listaTweets = tweetsRecomendados.map(tweetId => {
            const usuario = users[tweetsDB[tweetId].writerId];
            const dados = {...tweetsDB[tweetId], 
                "nome": usuario.nome,
                "fotoPerfil": usuario.fotoPerfil,
                "fotoPerfilRoot": users["root"].fotoPerfil,
                "tweetId": tweetId,
                "saved": true
    
            }
            return <Tweet 
                key={tweetId}
                {...dados}
            />
        });

    return (
        <body>
            <Header 
                tipo="bookmarks"
                nome={users["root"].nome} 
                fotoPerfil={users["root"].fotoPerfil}
            />
            <div className="corpo-principal">
                <Menulateral 
                    primeiro="Tweets"
                    segundo="Tweets & replies"
                    terceiro="Media"
                    quarto="Likes"
                />
                <div className="tweet-tamanho">
                    <RetweetTag nome="Daniela Jensen" />
                    {listaTweets}
                </div>
                <MenuMobile
                    tipo="perfil"
                />
            </div>
                
        </body>
    )
}