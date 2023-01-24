import React from "react";

import "../styles/ExplorePage.css"

import Header from '../components/Header/header';
import Menulateral from '../components/Menulateral/Menulateral';
import SearchBar from '../components/SearchBar/SearchBar';
import Tweet from '../components/Tweet/Tweet';

export default function explore (props) {
    return (
        <body>
            <Header />
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