
import SugestaoSeguir from './SugestaoSeguir.js';
import '../../styles/QuemSeguir.css'
import users from "../../mockData/users.json";


//https://picsum.photos/266/77 é uma imagem aleatoria gerada com o tamanho apropriado para a fotoFundo
//https://randomuser.me/api/?results=5 gerador de pessoas aleatorias


function QuemSeguir(props) {

  const sugests = props.sugests;

  const listaSugestoes = sugests.map(element => {
      const dados = users[element]
      const imagemPerfil = require(`../../images/fotoPerfil/${dados.fotoPerfil}`);
      const imagemFundo = require(`../../images/planoFundo/${dados.fotoFundo}`);
      return <SugestaoSeguir nome={dados.nome} seguidores={dados.followersCount} fotoPerfil={imagemPerfil}
      fotoFundo={imagemFundo} bio={dados.bio} id={element}/>
  });

  return (
    <div className="Container">
      <div className='TextoQuemSeguir'>
        Quem seguir
      </div>
      {listaSugestoes}
      
    </div>
  );
}

export default QuemSeguir;