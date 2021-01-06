import React from 'react';
import './SongRow.css';

export interface SongRowProps {
    track: any;
}
 
const SongRow: React.FC<SongRowProps> = ({track= "test"}) => {
    return (  
        <div className="songRow">
            <img className="songrow__album" src={track?.album?.images[0]?.url} alt=""/>
            <div className="songRow__info">
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map((artist: any) => artist.name).join(", ")}
                    {track.album.name}
                </p>
            </div>
        </div>
    );
}
 
export default SongRow;