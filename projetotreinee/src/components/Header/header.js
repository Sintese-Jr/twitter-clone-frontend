import React from 'react'
import LogoTelaGrande from './images/tweeter.svg'
import LogoTelaPequena from './images/tweeter-small.svg'
import FotoPerfil from './images/perfil.jpg'
import Seta from './images/seta.png'
import '../../styles/header.css'
import {Link, NavLink} from "react-router-dom"

function Header() {
    return(
        <header>
            <div className='conteudo'>
                <img src={LogoTelaGrande} alt="Logotipo Tweeter" className="logo"></img>
                <img src={LogoTelaPequena} alt="Logotipo Tweeter" className="logoPequena"></img>
                <table className='paginas'>
                    <tr>
                        <td className='tdespaco home'><NavLink to="/">Home</NavLink></td>
                        <td className='tdespaco explore'><NavLink to="/explore">Explore</NavLink></td>
                        <td className='tdespaco bookmarks' id='book'><NavLink to="/bookmarks">Bookmarks</NavLink></td>
                    </tr>
                </table>

                <table className='perfil'>
                    <tr>
                        <td className='tdespacoPerfil'><img src={FotoPerfil} alt="Foto Perfil" id="fotoPerfil"></img></td>
                        <td className='tdespacoPerfil' id="nomeUsuario">Nome do usuário</td>
                        <td className='tdespacoPerfil'><img src={Seta} alt="Seta para baixo" id="seta"></img></td>
                    </tr>
                </table>
            </div>
        </header>
    )
}

export default Header;