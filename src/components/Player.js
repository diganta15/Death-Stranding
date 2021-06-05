import React from 'react';
import ReactPlayer from "react-player";
import Background from '../images/ytBack.jpeg'
// import Icon from "../images/play_circle_black_24dp.jpg";

const Player = () => {


    return (
      <div className="player">
        <ReactPlayer
          url="https://youtu.be/tCI396HyhbQ"
          volume={1}
          light={Background}
        
        />
      </div>
    );
}

export default Player;
