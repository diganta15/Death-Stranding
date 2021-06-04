import React,{useState} from 'react';

const Character = ({mainClass, name,image}) => {

  const [overlay, setOverlay] = useState(false);

    return (
      <div
        className={mainClass}
        onMouseEnter={() => {
          setOverlay(true);
        }}
        onMouseLeave={() => {
          setOverlay(false);
        }}>
        <div className={overlay ? "overlay" : null}></div>
        <img src={image} alt="" />
        {overlay ? <h1 className="character-name">{name}</h1> : null}
      </div>
    );
}

export default Character;
