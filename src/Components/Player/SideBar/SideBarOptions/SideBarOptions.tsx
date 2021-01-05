import React from 'react';
import './SideBarOptions.css';


export interface SideBarOptionsProps {
    title?: string;
    Icon?: any;

}
 
const SideBarOptions: React.FC<SideBarOptionsProps> = ({title, Icon}) => {
    return (  
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOption__icon" />}
            {Icon ?<h4>{title}</h4> : <p>{title}</p>}
        </div>
    );
}
 
export default SideBarOptions;