import React from 'react'
import Lupa from './images/search.png'
import '../../styles/searchBar.css'

function SearchBar () {
    return (
        <div className="search">
            <img src={Lupa} alt="Ícone de lupa" className="lupa"></img>
            <input type="search" placeholder="Search" className="texto"></input>
            <button className="botao-search">Search</button>
        </div>
    )
}

export default SearchBar