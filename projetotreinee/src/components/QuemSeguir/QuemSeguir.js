
import SugestaoSeguir from './SugestaoSeguir.js';
import '../../styles/QuemSeguir.css'


//https://picsum.photos/266/77 é uma imagem aleatoria gerada com o tamanho apropriado para a fotoFundo
//https://randomuser.me/api/?results=5 gerador de pessoas aleatorias


function QuemSeguir() {

  return (
    <div className="container">
      <div className='textoQuemSeguir'>
        Quem seguir
      </div>
      <SugestaoSeguir nome="Gilberto Amauri" seguidores='9' fotoPerfil="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1oQMG4t94U8xxuBLkavwXOhsVdSHaAR7ttg&usqp=CAU"
        fotoFundo="https://picsum.photos/266/77" bio="Eu sou o Gilberto ex-jogador de volêi pela seleção brasileira" />
      
    </div>
  );
}

export default QuemSeguir;