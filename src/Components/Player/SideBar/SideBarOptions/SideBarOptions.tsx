import React from 'react';
import { useDispatch } from 'react-redux';
import { setDiscoverWeekly } from '../../../../Store/actions/player';
import './SideBarOptions.css';
import queryString from 'query-string';


export interface SideBarOptionsProps {
    title?: string;
    Icon?: any;
    playlist?: any;
    spotify?: any;
    playlistCode? : string;
}

const SideBarOptions: React.FC<SideBarOptionsProps> = ({title, Icon, playlist, spotify, playlistCode}) => {
    //onclick cambie el contenido del feed
    //variables

    //actions
    const dispatch = useDispatch();
    const set_discover_weekly = (discover_weekly: any) => dispatch(setDiscoverWeekly(discover_weekly));
    
    //handler
    const playlistHandler = () => {
        console.log('playlist handler', playlist);
        

        //change weekly to playlist , //when pressing home use weekly again.
        if(playlistCode && spotify){
            spotify.getPlaylist("37i9dQZEVXcQ9COmYvdajy")
            .then((response: any) => {
              set_discover_weekly(response);
            });
        }
        else if(spotify){
            spotify.getPlaylist(playlist.id)
            .then((response: any) => {
            set_discover_weekly(response);
            });
        }

    }



    return (  
        <div onClick={playlistHandler} className="sidebarOption">
            {Icon && <Icon className="sidebarOption__icon" />}
            {Icon ?<h4>{title}</h4> : <p>{title}</p>}
        </div>
    );
}
 
export default SideBarOptions;