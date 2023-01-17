import '../../styles/trends.css';
import HashtagSeguidores from './HashtagSeguidores'; 

function App() {
  return (
    <div className="App">
      <div className='container'>
        <p className= 'trends'>Trends for you</p>
        <hr/>
        <HashtagSeguidores hashtag = 'joao pedro lindo' seguidores = '112k Tweets'/>
        <HashtagSeguidores hashtag = 'joao pedro maravilhoso' seguidores = '112k Tweets'/>
        <HashtagSeguidores hashtag = 'joao pedro cheiroso' seguidores = '112k Tweets'/>
        <HashtagSeguidores hashtag = 'joao pedro gostoso' seguidores = '112k Tweets'/>
        <HashtagSeguidores hashtag = 'joao pedro honesto' seguidores = '112k Tweets'/>
        <HashtagSeguidores hashtag = 'joao pedro bom amigo' seguidores = '112k Tweets'/>
      </div>
    </div>
  );
}

export default App;
