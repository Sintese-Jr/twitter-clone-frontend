import React from "react";
import "../styles/HomePage.css"
import Header from "../components/Header/header";
import Trends from "../components/Trends/trends"
import Tweet from "../components/Tweet/Tweet.js"
import RetweetTag from "../components/utilities/RetweetTag";
import QuemSeguir from "../components/QuemSeguir/QuemSeguir"
import Tweetar from "../components/Tweetar/tweetar"

export default function HomePage() {
    return (
        <body>
            <Header />
            <div className="corpo-principal-home">
                <div className="tweet-tamanho-home">
                    <Tweetar />
                    <RetweetTag nome="Daniela Jensen" />
                    <Tweet />
                    <Tweet />
                    <Tweet />
                </div>
                <div className="lateral-esquerda">
                    <Trends />
                    <div className="quem-seguir">
                        <QuemSeguir />
                    </div>
                </div>
            </div>
        </body>
    )
}