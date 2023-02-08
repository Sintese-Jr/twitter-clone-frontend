import React from "react";
import "../styles/PerfilPage.css"
import Header from "../components/Header/header.js"
import CardPerfil from "../components/CardPerfil/CardPerfil"
import Menulateral from "../components/Menulateral/Menulateral";
import Tweet from "../components/Tweet/NewTweet.js"
import RetweetTag from "../components/utilities/RetweetTag";
import users from "../mockData/users.json";
import tweetsDB from "../mockData/tweetsDB.json";
import MenuMobile from "../components/MenuMobile/menuMobile";

export default function PerfilPage() {
    const perfilAtual = window.location.href.split("perfil/")[1];
    const srcImagemCapa = require(`../images/planoFundo/${users[perfilAtual].fotoFundo}`);
    const srcImagemPerfil = require(`../images/fotoPerfil/${users[perfilAtual].fotoPerfil}`);
    const nomeuser = users[perfilAtual].nome;
    const followingnomeuser = users[perfilAtual].followingCount;
    const followersuser = users[perfilAtual].followersCount;
    const descricao = users[perfilAtual].bio;

    const listaIDTweets = users[perfilAtual].tweetsProprios;

    const listaTweets = listaIDTweets.map(tweetId => {
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
                tipo="perfil"
                nome={users["root"].nome} 
                fotoPerfil={users["root"].fotoPerfil}
            />
            <CardPerfil 
                srcImagemCapa={srcImagemCapa}
                srcImagemPerfil={srcImagemPerfil}
                nomeuser={nomeuser}
                followingnomeuser={followingnomeuser}
                followersuser={followersuser}
                descricao={descricao}
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
    );
}