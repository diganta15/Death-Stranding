import React, { useState } from "react";
// import Norman from "../images/Norman.png";

const Cast = ({ image, name, link }) => {
  const [overlay, setOverlay] = useState(false);
  return (
    <div
      className="cast"
      onMouseEnter={() => {
        setOverlay(true);
      }}
      onMouseLeave={() => {
        setOverlay(false);
      }}>
     
        <div className="container" style={{ backgroundImage: `url(${image})` }}>
          {overlay ? (
            <React.Fragment>
              <div className="overlay"></div>
              <h1 className="name">{name}</h1>
            </React.Fragment>
          ) : null}
        </div>
      
    </div>
  );
};

export default Cast;
