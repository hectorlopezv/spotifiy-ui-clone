import React from 'react';
import './Player.css';

export interface PlayerProps {
    spotify: any;
}
 
const Player: React.FC<PlayerProps> = () => {
    return (  

        <div className="player">
            el player
        </div>
    );
}
 
export default Player;