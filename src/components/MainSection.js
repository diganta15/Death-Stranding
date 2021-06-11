import React from "react";
import Quite from "../images/60af476a87726.png";
import Cliff from "../images/60af4e0d15a4b-min.jpg";
import Poster from "../images/Layer1.jpg";
const MainSection = () => {
  return (
    <div className="MainSection">
      <div
        className="img-1 images"
        style={{ backgroundImage: `url(${Quite})` }}>
        <p className="float float-trailer"><i className="fa fa-play"></i><a href="#trailer">Trailer</a></p>
        <p className="float float-name">Death <br /> Stranding</p>
        <p className="float float-quote">Tomorrow <br /> is up to you</p>
        <p className="float bottom-links youtube" ><a href="https://www.youtube.com/channel/UC6lUqvh42Oc3XL19Edgd9QA" rel="noreferrer" target="_blank">Youtube</a></p>
        <p className="float bottom-links instagram" ><a href="https://www.instagram.com/kojipro2015_official/" rel="noreferrer" target="_blank">Instagram</a></p>
        <p className="float bottom-links twitter" ><a href="https://twitter.com/KojiPro2015_EN" rel="noreferrer" target="_blank">Twitter</a></p>
        <p className="float bottom-links site" ><a href="http://www.kojimaproductions.jp/" rel="noreferrer" target="_blank">A Hideo Kojima Game</a></p>
        </div>
      <div
        className="img-2 images"
        style={{ backgroundImage: `url(${Cliff})`, marginTop: "10rem" }}>

        </div>
        <div className="poster">
            <img src={Poster} alt="Poster" />
        <p className="float order"><a href="https://store.steampowered.com/app/1190460/DEATH_STRANDING/" rel="noreferrer" target="_blank" >Order Now</a></p>
        </div>
    </div>
  );
};

export default MainSection;
