import React, {useEffect} from 'react';
import './Footer.css';
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';
import { setItem, setPlaying } from '../../../Store/actions/player';
export interface FooterProps {
    spotify: any;
}
 
const Footer: React.FC<FooterProps> = ({spotify}) => {
    const dispatch = useDispatch();
    
    //variables
    const playing = useSelector((stateCurrent : any)=> stateCurrent.App.playing);
    
    //dispatches
    const set_Playing = (playing: boolean) => dispatch(setPlaying(!playing));
    const set_item = (item: any) => dispatch(setItem(item));
    //handlers
    const pauseHandler = () => {
        if(playing){
            spotify.pause();
            set_Playing(true);
        } else {
            spotify.play();
            set_Playing(false);
        }
    }

    //Listener, when spotify changes update info of object, of the Spotify desktop app or web app
    useEffect(() => {
        spotify.getMyCurrentPlaybackState().then((new_info: any) => {
            console.log('la new info', new_info);
            set_Playing(new_info.is_playing);
            set_item(new_info.item);
        });
    }, [spotify]);


    return (  
        <div className="footer">
            <div className="footer__left">    
                <img className="footer__albumLogo" src="" alt=""/>
                
                <div className="footer__songInfo">
                    <h4>Yeah!</h4>
                    <p>Usher</p>
                </div>
            
            </div>
            
            <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon onClick={() => {}} className="footer__icon" />
        {playing ? (
          <PauseCircleOutlineIcon
            onClick={pauseHandler}
            fontSize="large"
            className="footer__icon"
          />
        ) : (
          <PlayCircleOutlineIcon
            onClick={pauseHandler}
            fontSize="large"
            className="footer__icon"
          />
        )}
        <SkipNextIcon onClick={() => {}} className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>


            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby="continuous-slider" />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
 
export default Footer;