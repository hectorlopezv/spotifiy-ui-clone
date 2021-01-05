import React, {useEffect, useState} from 'react';
import "./App.css";
import Login from './Components/Login/Login';
import Player from './Components/Player/Player';
import {parsed_token} from './lib/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import {connect, useSelector, useDispatch} from 'react-redux';
export interface AppProps {
  
}

const spotify = new SpotifyWebApi();

const App: React.FC<AppProps> = () => {
  const [token, settoken] = useState('');
  const [user, setuser] = useState();

  useEffect(() => {
      const _token: string = parsed_token().access_token as string;
      window.location.hash = "";//clean hash
      
      if(_token){
        settoken(_token);
        spotify.setAccessToken(_token);
        spotify.getMe().then((user: any) => {
          console.log('person', user);
        }).catch();
      }

  }, []);

  return (
    <div className="app">
      {
        token ? (<Player />) : (  <Login/>)
      }
    
    </div>
  );
}
 
export default App;
