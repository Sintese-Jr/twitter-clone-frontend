import React from "react";
import "../styles/BookmarkPage.css"
import Header from "../components/Header/header.js"
import Menulateral from "../components/Menulateral/Menulateral";
import Tweet from "../components/Tweet/Tweet.js"


export default function BookmarksPage() {
    return (
        <body>
            <Header tipo="bookmarks"/>
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
                </div>
        </body>
    )
}