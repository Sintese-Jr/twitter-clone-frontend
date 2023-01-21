import '../../styles/sugestaoSeguir.css'
import BotaoAzulPequeno from "../utilities/BotaoAzulPequeno.js";


export default function SugestaoSeguir({fotoPerfil, nome, seguidores,bio, fotoFundo}) {
    return (
        <div className="SugestaoSeguir">
            <hr />
            <div className="NomeSeguidoresFollow">
                <img src={fotoPerfil} alt="Imagem de perfil" className="FotoPerfil"></img>
                <div className="NomeSeguidores">
                    <div className="Nome">{nome}</div>
                    <div className="Seguidores">{seguidores} seguidores</div>
                </div>
                <BotaoAzulPequeno icone='fa-solid fa-user-plus' texto='Seguir' />
            </div>
            <div>
                <p className="Bio">{bio}</p>
                <img alt="Plano de fundo do perfil" src={fotoFundo} className="FotoFundo"></img>
            </div>
        </div>
    );
}

