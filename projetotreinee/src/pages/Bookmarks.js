import React from "react";
import "../styles/BookmarkPage.css"
import Header from "../components/Header/header.js"
import Menulateral from "../components/Menulateral/Menulateral";
import Tweet from "../components/Tweet/Tweet.js"
import users from "../mockData/users.json";
import tweetsDB from "../mockData/tweetsDB.json";
import MenuMobile from "../components/MenuMobile/menuMobile";

export default function BookmarksPage() {
    return (
        <body>
            <Header 
                tipo="bookmarks"
                nome={users["root"].nome} 
                fotoPerfil={users["root"].fotoPerfil}
            />

                <div className="pagina-principal">
                    <Menulateral 
                        primeiro="Tweets"
                        segundo="Tweets & replies"
                        terceiro="Media"
                        quarto="Likes"
                    />
                    <div className="tweet-tamanho">
                        <Tweet />
                        <Tweet />
                        <Tweet />
                    </div>
                    <MenuMobile
                        tipo="bookmarks"
                    />
                </div>
        </body>
    )
}