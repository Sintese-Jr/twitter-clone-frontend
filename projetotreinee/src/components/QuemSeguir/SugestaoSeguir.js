import '../../styles/sugestaoSeguir.css'
import BotaoAzulPequeno from "../utilities/BotaoAzulPequeno.js";
import React, { useState } from 'react';


export default function SugestaoSeguir({fotoPerfil, nome, seguidores,bio, fotoFundo}) {
    const [seguindo, setSeguindo] = useState(false);
    
    function handleClick()
    {
        if(seguindo === false)setSeguindo(true);
        else setSeguindo(false);
    }
    
    return (
        <div className="SugestaoSeguir">
            <hr />
            <div className="NomeSeguidoresFollow">
                <img src={fotoPerfil} alt="Imagem de perfil" className="FotoPerfil"></img>
                <div className="NomeSeguidores">
                    <div className="Nome">{nome}</div>
                    <div className="Seguidores">{seguidores} seguidores</div>
                </div>
                <div className='Botao' onClick={handleClick} >
                    {seguindo === false && <BotaoAzulPequeno  icone='fa-solid fa-user-plus' texto='Seguir' />}
                    {seguindo === true && <BotaoAzulPequeno  texto='Seguindo' />}
                </div>
            </div>
            <div>
                <p className="Bio">{bio}</p>
                <img alt="Plano de fundo do perfil" src={fotoFundo} className="FotoFundo"></img>
            </div>
        </div>
    );
}

