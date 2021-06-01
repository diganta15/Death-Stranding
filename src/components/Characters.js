import React,{useState} from 'react';
import Character from './Character';
import Group from "../images/death-stranding-8k-g8-min.jpg";
import Sam from "../images/1067874-min.png";
const Characters = () => {
  const state = [{
    id:1,
    name:Sam,
    image:Sam,
    link:""
  }]
    return (
      <div className="characters">
        <div
          className="group-display"
          style={{ backgroundImage: `url(${Group})` }}></div>
        <div className="char-flex">
          <div className="c c1 char-grid">
            <Character mainClass="g g1" />
           
            <Character mainClass={"g g2"} />
           
          </div>
          <Character mainClass={"c c2"} />
        
          <div className="btn btn-left"> &#60; </div>
          <div className="btn btn-right">&#62;</div>
        </div>
      </div>
    );
}

export default Characters;
