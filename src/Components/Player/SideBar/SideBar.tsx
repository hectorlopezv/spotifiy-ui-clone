import React from 'react';
import './SideBar.css';

export interface SideBarProps {
    
}
 
const SideBar: React.FC<SideBarProps> = () => {
    return (  
        <div className="sidebar">
            im the sidebar
        </div>
    );
}
 
export default SideBar;