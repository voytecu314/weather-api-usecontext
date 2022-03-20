import { useContext } from 'react';
import backgrounds_url from './assets/weatherPics';
import Top from './components/Top';
import Bottom from './components/Bottom';
import MyContext from './context/MyContext';

import './App.css';

function App() {  
  
  const {data, isThereData} = useContext(MyContext);
  const background_key = isThereData?data.weather[0].main:'default';
  
  return (
    <div className="App" style={ {background: `url(${backgrounds_url[background_key]}) no-repeat`,
                                  backgroundSize: 'cover'} }>
      <Top />
      <Bottom />
     
    </div>
  );
}

export default App;
