import '../../styles/sugestaoSeguir.css'
import BotaoAzulPequeno from "../utilities/BotaoAzulPequeno.js";
import React, { useState } from 'react';
import {Link} from "react-router-dom";


export default function SugestaoSeguir({fotoPerfil, nome, seguidores,bio, fotoFundo, id}) {
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
                        <Link to={`../perfil/${id}`}>
                            <div className="Nome">{nome}</div>
                        </Link>
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

