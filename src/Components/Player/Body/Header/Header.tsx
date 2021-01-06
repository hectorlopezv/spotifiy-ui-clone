import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
export interface HeaderProps {
    spotify:any;
}
 
const Header: React.FC<HeaderProps> = ({spotify}) => {
    const user = useSelector((stateCurrent: any) => stateCurrent.App.user);
    return (  
        <div className="header">
            <div className="header__left">
                <SearchIcon />
                <input type="text" placeholder="Search for Lists and Songs"/>
            </div>

            <div className="header__right">
                <Avatar src={user?.images && (user?.images?.length > 0) ? user.images[0].url : '' } alt="avatar"/>
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    );
}
 
export default Header;