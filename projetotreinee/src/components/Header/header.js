import React from 'react'
import LogoTelaGrande from './images/tweeter.svg'
import LogoTelaPequena from './images/tweeter-small.svg'
import FotoPerfil from './images/perfil.jpg'
import Seta from './images/seta.png'
import '../../styles/header.css'
import SetaCima from './images/setaCima.png'
import MenuPerfil from '../MenuPerfil/MenuPerfil'

function Header(props) {

    function abrir() {
        const menuPerfil = document.getElementById("menuPerfil");

        const setaBaixo = document.getElementById("seta");
        setaBaixo.classList.remove('aparecerSeta');
        setaBaixo.classList.add('desaparecerSeta');
        menuPerfil.classList.remove('desaparecerMenu');
        const setaCima = document.getElementById("setaCima");
        setaCima.classList.remove('desaparecerSeta');
        setaCima.classList.add('aparecerSeta');
    }

    function fechar() {
        const menuPerfil = document.getElementById("menuPerfil");

        const setaCima = document.getElementById("setaCima");
        setaCima.classList.remove('aparecerSeta');
        setaCima.classList.add('desaparecerSeta');
        menuPerfil.classList.add('desaparecerMenu');
        const setaBaixo = document.getElementById("seta");
        setaBaixo.classList.remove('desaparecerSeta');
        setaBaixo.classList.add('aparecerSeta');
    }

    function abrirPerfilMobile() {
        const menuPerfil = document.getElementById("menuPerfil");

        const fotoPrimaria = document.getElementById("fotoPerfilPrimaria");
        fotoPrimaria.classList.remove('aparecerFoto');
        fotoPrimaria.classList.add('desaparerFoto');
        menuPerfil.classList.remove('desaparecerMenu');
        const fotoSecundaria = document.getElementById("fotoPerfilSecundaria");
        fotoSecundaria.classList.remove('desaparerFoto');
        fotoSecundaria.classList.add('aparecerFoto');
    }

    function fecharPerfilMobile() {
        const menuPerfil = document.getElementById("menuPerfil");

        const fotoSecundaria = document.getElementById("fotoPerfilSecundaria");
        fotoSecundaria.classList.remove('aparecerFoto');
        fotoSecundaria.classList.add('desaparerFoto');
        menuPerfil.classList.add('desaparecerMenu');
        const fotoPrimaria = document.getElementById("fotoPerfilPrimaria");
        fotoPrimaria.classList.remove('desaparerFoto');
        fotoPrimaria.classList.add('aparecerFoto');
    }
    
    // switch (props.tipo) {
    //     case "home":
    //         const linkHome = document.getElementById("linkHome");
    //         linkHome.classList.add('selecionado');
    //         break;
    
    //     case "explore":
    //         const linkExplore = document.getElementById("linkExplore");
    //         linkExplore.classList.add('selecionado');
    //         break;

    //     case "bookmarks":
    //         const linkBookmarks = document.getElementById("linkBook");
    //         linkBookmarks.classList.add('selecionado');
    //         break;
    // }
    
    return(
        <header>
            <div className='conteudo'>
                <img src={LogoTelaGrande} alt="Logotipo Tweeter" className="logo"></img>
                <img src={LogoTelaPequena} alt="Logotipo Tweeter" className="logoPequena"></img>
                <table className='paginas'>
                    <tr>
                        <td className='tdespaco' id='linkHome'>Home</td>
                        <td className='tdespaco' id='linkExplore'>Explore</td>
                        <td className='tdespaco' id='linkBook'>Bookmarks</td>
                    </tr>
                </table>

                <table className='perfil'>
                    <tr>
                        <td className='tdespacoPerfil'><img src={FotoPerfil} alt="Foto Perfil" id="fotoPerfilPrimaria" className='aparecerFoto' onClick={abrirPerfilMobile}></img></td>
                        <td className='tdespacoPerfil'><img src={FotoPerfil} alt="Foto Perfil" id="fotoPerfilSecundaria" className='desaparerFoto' onClick={fecharPerfilMobile}></img></td>
                        <td className='tdespacoPerfil' id="nomeUsuario">Nome do usuário</td>
                        <td className='tdespacoPerfil'><img src={Seta} alt="Seta para baixo" id="seta" className='aparecerSeta' onClick={abrir}></img></td>
                        <td className='tdespacoPerfil'><img src={SetaCima} alt="Seta para cima" id="setaCima" className='desaparecerSeta' onClick={fechar}></img></td>
                    </tr>
                </table>
            </div>
            <div id='menuPerfil' className='desaparecerMenu'>
                <MenuPerfil></MenuPerfil>
            </div>
        </header>
    );
}

export default Header;