import React from 'react';
import Sam from "../images/1067874-min.png";
const Character = ({mainClass}) => {
    return (
      
        <div className={mainClass}>
          <div className="overlay"></div>
          <img src={Sam} alt="" />
          <h1 className="character-name">Sam</h1>
        </div>
    
    );
}

export default Character;
