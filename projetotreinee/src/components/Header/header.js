import React from 'react'
import Logo from './images/tweeter.svg'
import FotoPerfil from './images/perfil.jpg'
import Seta from './images/seta.png'

function Header() {
    return(
        <header>
            <div className='conteudo'>
                <img src={Logo} alt="Logotipo Tweeter" className="logo"></img>
                <table className='paginas'>
                    <tr>
                        <td className='tdespaco'>Home</td>
                        <td className='tdespaco'>Explore</td>
                        <td className='tdespaco' id='book'>Bookmarks</td>
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