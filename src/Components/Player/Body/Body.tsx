import React from 'react';
import './Body.css';

export interface BodyProps {
    
}
 
const Body: React.FC<BodyProps> = () => {
    return (  
        <div className="body">
            im the body
        </div>
    );
}
 
export default Body;