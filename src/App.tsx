import React, {useEffect, useState} from 'react';
import "./App.css";
import Login from './Components/Login/Login';
import Player from './Components/Player/Player';
import {parsed_token} from './lib/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import {useSelector, useDispatch} from 'react-redux';
import {setPlaylists, setToken, setUser, setDiscoverWeekly} from './Store/actions/player';

export interface AppProps {
  
}

const spotify = new SpotifyWebApi();//get user, playlists, current track

const App: React.FC<AppProps> = () => {
  const dispatch = useDispatch();
  const set_user = (user: any) => dispatch(setUser(user));
  const set_token = (token: any) => dispatch(setToken(token));
  const set_playlist = (playlist: any) => dispatch(setPlaylists(playlist));
  const set_discover_weekly = (discover_weekly: any) => dispatch(setDiscoverWeekly(discover_weekly));
  const token = useSelector((stateCurrent: any) => stateCurrent.App.token);

  useEffect(() => {
      const _token: string = parsed_token().access_token as string;
      window.location.hash = "";//clean hash
    
      if (_token) {
        set_token(_token);//setting the token
        spotify.setAccessToken(_token);//set token in the class
        
        spotify.getMe()//get info from user
        .then((user: any) => {
          set_user(user);//save user in the store
        })
        .catch((error: any)=> console.log(error));

        spotify.getUserPlaylists()
        .then((playlists: any)=> {
          console.log('playlists', playlists);
          set_playlist(playlists);
        })
        .catch((error: any)=> console.log(error));
        
        spotify.getPlaylist("37i9dQZEVXcQ9COmYvdajy")
        .then((response: any) => {
          set_discover_weekly(response);
        });

      }


  }, []);




  return (
    <div className="app">
      {
        token ? (<Player spotify={spotify} />) : (  <Login/>)
      }
    
    </div>
  );
}
 
export default App;
