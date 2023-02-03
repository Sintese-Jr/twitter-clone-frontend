import '../../styles/menuMobile.css';
import React from 'react'
import ReactDOM from 'react-dom/client';
import {Link, NavLink} from "react-router-dom"
import iconHome from './images/home.png';
import iconBussola from './images/bussola.png';
import iconBookmark from './images/bookmark.png';

function MenuMobile(props) {

  const tipoPagina = props.tipo;

  function paginaAtualMenu() {
      const linkHomeMenu = document.getElementById("linkHomeMenu");
      const linkExploreMenu = document.getElementById("linkExploreMenu");
      const linkBookmarksMenu = document.getElementById("linkBookMenu");
  
      if (tipoPagina === "home") {
        linkHomeMenu.classList.add('selecionado');

      } else if (tipoPagina === "explore") {
        linkExploreMenu.classList.add('selecionado');

      } else if (tipoPagina === "bookmarks") {
        linkBookmarksMenu.classList.add('selecionado');

      } else {

      }    
  }


  return (
    <div className='menu'>
        <table className='pagina' onLoad={paginaAtualMenu}>
            <tr > 
                <td className='tdespaco'><NavLink to="/"><div className='separar' id='linkHomeMenu'><img src={iconHome} alt="Ícone Home" className="icon"></img></div></NavLink></td>
                <td className='tdespaco'><NavLink to="/explore"><div className='separar' id='linkExploreMenu'><img src={iconBussola} alt="Ícone Bússola" className="icon"></img></div></NavLink></td>
                <td className='tdespaco'><NavLink to="/bookmarks"><div className='separar' id='linkBookMenu'><img src={iconBookmark} alt="Ícone Bookmark" className="icon"></img></div></NavLink></td>
            </tr>
        </table>
    </div>
  );
}

export default MenuMobile;
