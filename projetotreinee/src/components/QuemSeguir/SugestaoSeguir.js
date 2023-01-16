import BotaoAzul from "../utilities/BotaoAzul.js";
import '../../styles/sugestaoSeguir.css'


export default function SugestaoSeguir({fotoPerfil, nome, seguidores,bio, fotoFundo}) {
    return (
        <div className="sugestaoSeguir">
            <hr />
            <div className="NomeSeguidoresFollow">
                <img src={fotoPerfil} alt="Imagem de perfil" className="FotoPerfil"></img>
                <div className="NomeSeguidores">
                    <div className="nome">{nome}</div>
                    <div className="seguidores">{seguidores} seguidores</div>
                </div>
                <BotaoAzul icone='fa-solid fa-user-plus' texto='Seguir' />
            </div>
            <div>
                <p className="Bio">{bio}</p>
                <img alt="Plano de fundo do perfil" src={fotoFundo} className="FotoFundo"></img>
            </div>
        </div>
    );
}

