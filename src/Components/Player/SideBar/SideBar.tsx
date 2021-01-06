import React from 'react';
import './SideBar.css';
import SideBarOptions from './SideBarOptions/SideBarOptions';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { useSelector } from 'react-redux';

export interface SideBarProps {
    
}
 
const SideBar: React.FC<SideBarProps> = () => {
    const playLists = useSelector((stateCurrent: any)=> stateCurrent.App.playlists);
    
    return (  
        <div className="sidebar">
            <img
                className="sidebar__logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
             />
             <SideBarOptions title="Home" Icon={HomeIcon}/>
             <SideBarOptions title="Search" Icon={SearchIcon}/>
             <SideBarOptions title="Your Library" Icon={VideoLibraryIcon}/>
            <br/>
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />
            {playLists.map((playlist: any) => {
                return <SideBarOptions key={playlist.name} title={playlist.name} />
            })}
        </div>
    );
}
 
export default SideBar;