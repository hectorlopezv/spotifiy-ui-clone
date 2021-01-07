import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Body.css';
import Header from './Header/Header';
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from './SongRow/SongRow';
import { setDiscoverWeekly, setItem, setPlaying } from '../../../Store/actions/player';

export interface BodyProps {
    spotify: any;
}
 
const Body: React.FC<BodyProps> = ({spotify}) => {
    const dispatch = useDispatch();
    //variables
    const weekly = useSelector((stateCurrent: any) => stateCurrent.App.discover_weekly);
    const playing = useSelector((stateCurrent : any)=> stateCurrent.App.playing);
    //actions
    const set_Playing = (playing: boolean) => dispatch(setPlaying(playing));
    const set_item = (item: any) => dispatch(setItem(item));
    const set_discover_weekly = (discover_weekly: any) => dispatch(setDiscoverWeekly(discover_weekly));
    

    //handlers
    const setCurrentHandler = async () => {
        const _ = await spotify.getMyCurrentPlaybackState();
        const response = await spotify.getMyCurrentPlaybackState();
        //console.log(response, response.context.href.slice(37));
       // set_discover_weekly();
       spotify.getPlaylist( response.context.href.slice(37))
       .then((response: any) => {
           //console.log('este es el playlist', response);
         set_discover_weekly(response);
       });
    }

    const playHandler = async () => {
        await spotify.play({//change playlists!
            "context_uri": weekly.uri
        });
        const _ = await spotify.getMyCurrentPlaybackState();
        const response = await spotify.getMyCurrentPlaybackState();
        set_Playing(response.is_playing);
        set_item(response.item);
    }

    useEffect(() => {
        setCurrentHandler();
    }, [])


    return (  
        <div className="body">
            <Header spotify={spotify}/>
            <div className="body__info">
                <img src={weekly?.images && (weekly?.images?.length > 0) ? weekly.images[0].url : '' } alt=""/>
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{weekly?.description}.</p>
                </div>
            </div>

            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon
                        className="body__shuffle" onClick={playHandler}
                    />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>
                {weekly?.tracks.items.map((track_item: any) => {
                    return <SongRow key={track_item.track.id} track={track_item.track}/>
                })}


            </div>
        </div>
    );
}
 
export default Body;