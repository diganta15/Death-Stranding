import React from "react";
import Quite from "../images/60af476a87726.png";
import Cliff from "../images/60af4e0d15a4b-min.jpg";
import Poster from "../images/60af4c4bc48f9-min.jpg";
const MainSection = () => {
  return (
    <div className="MainSection">
      <div
        className="img-1 images"
        style={{ backgroundImage: `url(${Quite})` }}>

        </div>
      <div
        className="img-2 images"
        style={{ backgroundImage: `url(${Cliff})`, marginTop: "10rem" }}>

        </div>
        <div className="poster">
            <img src={Poster} alt="Poster" />
        </div>
    </div>
  );
};

export default MainSection;
