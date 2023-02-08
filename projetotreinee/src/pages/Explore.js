import React from "react";

import "../styles/ExplorePage.css"

import Header from '../components/Header/header';
import Menulateral from '../components/Menulateral/Menulateral';
import SearchBar from '../components/SearchBar/SearchBar';
import Tweet from '../components/Tweet/Tweet';
import users from "../mockData/users.json";
import MenuMobile from "../components/MenuMobile/menuMobile";
import tweetsDB from "../mockData/tweetsDB.json";
import Tweetar from "../components/Tweetar/tweetar"
import RetweetTag from "../components/utilities/RetweetTag";


export default function explore (props) {
    const tweetsRecomendados = [...users["root"].tweetsFollowing];
    const listaTweets = tweetsRecomendados.map(tweetId => {
        const usuario = users[tweetsDB[tweetId].writerId];
        const dados = {...tweetsDB[tweetId], 
            "nome": usuario.nome,
            "fotoPerfil": usuario.fotoPerfil,
            "fotoPerfilRoot": users["root"].fotoPerfil,
            "tweetId": tweetId

        }
        return <Tweet 
            key={tweetId}
            {...dados}
        />
    });

    return (
        
        <body>
            <Header 
                tipo="explore"
                nome={users["root"].nome} 
                fotoPerfil={users["root"].fotoPerfil}
            />
            <div className="principalExplore">
                <Menulateral 
                    primeiro="Top"
                    segundo="Latest"
                    terceiro="People"
                    quarto="Media" 
                />
                <div className="menuPrincipalExplore">
                    <SearchBar />
                    <div className="corpo-principal-home">
                        <div className="tweet-tamanho-home">
                        <Tweetar 
                        fotoPerfil={users["root"].fotoPerfil}/>
                        <RetweetTag nome="Daniela Jensen" />
                        {listaTweets}
                    </div>
                    </div>
                </div>
                <MenuMobile
                    tipo="explore"
                />
            </div>
        </body>
    );
}