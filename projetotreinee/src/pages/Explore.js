import React from "react";

import "../styles/ExplorePage.css"

import Header from '../components/Header/header';
import Menulateral from '../components/Menulateral/Menulateral';
import SearchBar from '../components/SearchBar/SearchBar';
import Tweet from '../components/Tweet/Tweet';
import users from "../mockData/users.json";
import tweetsDB from "../mockData/tweetsDB.json";

export default function explore (props) {
    return (
        <body>
            <Header 
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
                    <Tweet />
                    <Tweet />
                    <Tweet />
                </div>
            </div>
        </body>
    );
}