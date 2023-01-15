import React from 'react'
import Lupa from './images/search.svg'
import 'import "../../styles/searchBar.css"'

function SearchBar () {
    return (
        <div className="search">
            <img src={Lupa} alt="Ícone de lupa" className="lupa"></img>
            <input type="search" placeholder="Search" className="texto"></input>
            <input className="botao" type="button" value="Search"></input>
        </div>
    )
}

export default SearchBar