import '../../styles/trends.css';
import HashtagSeguidores from './HashtagSeguidores'; 

function App(props) {

  const trends = [...props.trends];
  const trendsList = trends.map( elemento => {
    return <HashtagSeguidores 
      seguidores = '112k Tweets'
      hashtag = {elemento}
    />
  })

  return (
    <div className="App">
      <div className='container'>
        <p className= 'trends'>Trends for you</p>
        <hr/>
        {trendsList}
      </div>
    </div>
  );
}

export default App;

