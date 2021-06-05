import React from "react";
import TitleImage from "../images/60af536978d6c-min.jpg";
import Tomorrow from "../images/Death-Stranding-Tomorrow-Is-In-Your-Hands 1.png";
import Baby from "../images/60af509f82a99-min.jpg";
import Logo from "../images/60af5117938bc-min.png";

const ShowcaseTop = () => {
  return (
    <div className="showcase-top">
      <div className="title">
     
        <div
          className="image-container name"
          style={{ backgroundImage: `url(${TitleImage})` }}>
       
        </div>
        <div
          className="image-container"
          style={{ backgroundImage: `url(${Tomorrow})` }}>
         
        </div>
        <div
          className="image-container baby"
          style={{ backgroundImage: `url(${Baby})` }}>
            <p className="home-float">Home</p>
        </div>
      </div>
      <div className="kojima">
        <img src={Logo} alt="Kojima Productions" />
        <h1 className="banner-text">A HIDEO KOJIMA GAME</h1>
      </div>
    </div>
  );
};

export default ShowcaseTop;
