
import SugestaoSeguir from './SugestaoSeguir.js';
import '../../styles/QuemSeguir.css'


//https://picsum.photos/266/77 é uma imagem aleatoria gerada com o tamanho apropriado para a fotoFundo
//https://randomuser.me/api/?results=5 gerador de pessoas aleatorias


function QuemSeguir() {

  return (
    <div className="Container">
      <div className='TextoQuemSeguir'>
        Quem seguir
      </div>
      <SugestaoSeguir nome="Michael Scott" seguidores='9' fotoPerfil="https://randomuser.me/api/portraits/lego/7.jpg"
        fotoFundo="https://picsum.photos/266/77" bio="Dunder Mifflin regional manager. Apaixonado pela vida. Comediante e ator amador." />
      
    </div>
  );
}

export default QuemSeguir;