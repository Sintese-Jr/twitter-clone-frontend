import React from "react";
import "../styles/PerfilPage.css"
import Header from "../components/Header/header.js"
import CardPerfil from "../components/CardPerfil/CardPerfil"
import Menulateral from "../components/Menulateral/Menulateral";
import Tweet from "../components/Tweet/Tweet.js"
import RetweetTag from "../components/utilities/RetweetTag";
import users from "../mockData/users.json";
import tweetsDB from "../mockData/tweetsDB.json";

export default function PerfilPage() {
 
    return (
        <body>
            <Header 
                tipo="perfil"
                nome={users["root"].nome} 
                fotoPerfil={users["root"].fotoPerfil}
            />
            <CardPerfil />
            <div className="corpo-principal">
                <Menulateral 
                    primeiro="Tweets"
                    segundo="Tweets & replies"
                    terceiro="Media"
                    quarto="Likes"
                />
                <div className="tweet-tamanho">
                    <RetweetTag nome="Daniela Jensen" />
                    <Tweet />
                    <Tweet />
                    <Tweet />
                </div>
            </div>
        </body>
    )
}