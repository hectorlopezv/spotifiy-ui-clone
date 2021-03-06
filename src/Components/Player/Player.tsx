import React from 'react';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import './Player.css';
import SideBar from './SideBar/SideBar';

export interface PlayerProps {
    spotify: any;
}
 
const Player: React.FC<PlayerProps> = ({spotify}) => {

    return (  
        <div className="player">
            <div className="player__body">
                <SideBar spotify={spotify}/>
                <Body spotify={spotify}/>
            </div>
            <Footer spotify={spotify}/>
        </div>
    );
}
 
export default Player;