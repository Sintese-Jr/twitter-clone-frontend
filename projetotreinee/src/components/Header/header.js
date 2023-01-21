import React from 'react'
import LogoTelaGrande from './images/tweeter.svg'
import LogoTelaPequena from './images/tweeter-small.svg'
import FotoPerfil from './images/perfil.jpg'
import Seta from './images/seta.png'
import '../../styles/header.css'
import {Link} from "react-router-dom"

function Header() {
    return(
        <header>
            <div className='conteudo'>
                <img src={LogoTelaGrande} alt="Logotipo Tweeter" className="logo"></img>
                <img src={LogoTelaPequena} alt="Logotipo Tweeter" className="logoPequena"></img>
                <table className='paginas'>
                    <tr>
                        <td className='tdespaco home'><Link to="/">Home</Link></td>
                        <td className='tdespaco explore'><Link to="/explore">Explore</Link></td>
                        <td className='tdespaco bookmarks' id='book'><Link to="/bookmarks">Bookmarks</Link></td>
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