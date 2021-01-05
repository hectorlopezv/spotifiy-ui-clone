import React from 'react';
import './SideBar.css';
import SideBarOptions from './SideBarOptions/SideBarOptions';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

export interface SideBarProps {
    
}
 
const SideBar: React.FC<SideBarProps> = () => {
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

        </div>
    );
}
 
export default SideBar;