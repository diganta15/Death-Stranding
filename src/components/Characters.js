import React, { useState } from "react";
import Character from "./Character";
import Cast from "./Cast";
import Group from "../images/death-stranding-8k-g8-min.jpg";
import Sam from "../images/1067874-min.png";
import Amelie from "../images/wallhaven-xlrm73-min.png";
import Mama from "../images/60af6d2154dee-min.jpg";
import Cliff from "../images/60af4e0d15a4b-min.jpg";
import Deadman from "../images/Deadman-cropped.png";
import Higgs from "../images/wp6009559-death-stranding-higgs-wallpapers.jpg";
import Fragile from "../images/wp4397505-death-stranding-fragile-wallpapers.png";
import DieHardman from "../images/Die-Hardman_trailer_introduction.jpg";
import Heartman from "../images/Heartman_trailer_introduction.jpg";
import Baby from "../images/Death-Stranding-Full-HD-Screenshot-1920x1080-4-min.jpg";
import Background from "../images/back45.jpg";
import Norman from "../images/Norman.png";
import Lea from "../images/Lea.jpeg";
import Mads from "../images/Mads.jpeg";
const Characters = () => {
  const state = [
    {
      id: 1,
      name: "Sam",
      image: Sam,
      link: "",
    },
    {
      id: 2,
      name: "Amelie",
      image: Amelie,
      link: "",
    },
    {
      id: 3,
      name: "Mama",
      image: Mama,
      link: "",
    },
    {
      id: 4,
      name: "Fragile",
      image: Fragile,
      link: "",
    },
    {
      id: 5,
      name: "Cliff",
      image: Cliff,
      link: "",
    },
    {
      id: 6,
      name: "Higgs",
      image: Higgs,
      link: "",
    },
    {
      id: 7,
      name: "Heartman",
      image: Heartman,
      link: "",
    },
    {
      id: 8,
      name: "Die-Hardman",
      image: DieHardman,
      link: "",
    },
    {
      id: 9,
      name: "Deadman",
      image: Deadman,
      link: "",
    },
  ];

  const cast = [
    {
      id: 1,
      name: "Norman Reedus",
      appears_as: "Sam",
      image: Norman,
      link: "Norman",
    },
    {
      id: 2,
      name: "Léa Seydoux",
      appears_as: "Fragile",
      image: Lea,
      link: "Lea",
    },
    {
      id: 3,
      name: "Mads Mikkelsen",
      appears_as: "Cliff",
      image: Mads,
      link: "Mads",
    },
  ];
  const [char1, setChar1] = useState(0);
  const [char2, setChar2] = useState(1);
  const [char3, setChar3] = useState(2);

  const rightClick = () => {
    if (char1 !== 6) {
      setChar1(char1 + 3);
      setChar2(char2 + 3);
      setChar3(char3 + 3);
    }
  };

  const leftClick = () => {
    if (char1 !== 0) {
      setChar1(char1 - 3);
      setChar2(char2 - 3);
      setChar3(char3 - 3);
    }
  };

  return (
    <div className="characters">
      <div className="float characters-float">Characters</div>
      <div
        className="group-display"
        style={{ backgroundImage: `url(${Group})` }}></div>
      <div className="char-flex">
        <div className="c c1 char-grid">
          <Character
            mainClass="g g1"
            name={state[char1].name}
            image={state[char1].image}
          />

          <Character
            mainClass={"g g2"}
            name={state[char2].name}
            image={state[char2].image}
          />
        </div>
        <Character
          mainClass={"c c2"}
          name={state[char3].name}
          image={state[char3].image}
        />

        <div className="btn btn-left" onClick={leftClick}>
          {" "}
          &#60;{" "}
        </div>
        <div className="btn btn-right" onClick={rightClick}>
          &#62;
        </div>
      </div>
      <div className="baby" style={{ backgroundImage: `url(${Baby})` }}></div>
      <div className="casts">
        <div
          className="background"
          style={{ backgroundImage: `url(${Background})` }}>
          <div className="inner-content">
            {
              cast.map((item)=>(
                <Cast key={item.id} name={item.name} image={item.image} link={item.link} />
              ))
            }
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Characters;
