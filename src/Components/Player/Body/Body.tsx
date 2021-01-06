import React from 'react';
import { useSelector } from 'react-redux';
import './Body.css';
import Header from './Header/Header';
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from './SongRow/SongRow';

export interface BodyProps {
    spotify: string;
}
 
const Body: React.FC<BodyProps> = ({spotify}) => {
    const weekly = useSelector((stateCurrent: any) => stateCurrent.App.discover_weekly);

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
                        className="body__shuffle"
                    />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>
                {/* Lists of songs*/}
                {weekly?.tracks.items.map((track_item: any) => {
                    return <SongRow track={track_item.track}/>
                })}


            </div>
        </div>
    );
}
 
export default Body;