import React, { useEffect, useState } from "react";
import "./gridStyle.scss";

import Main from "../../images/main-image.jpg";
import Image0 from "../../images/image0.jpg";
import Image1 from "../../images/image1.jpg";
import Image2 from "../../images/image2.jpg";


const GridStyle = () => {
  const [portrait, setPortrait] = useState(false);
  useEffect(() => {
    const image = new Image();
    image.src = portrait ? Image2 : Image1;
    image.width > image.height ? setPortrait(false) : setPortrait(true);
  }, [portrait]);

  console.log('portrait', portrait);

  return (
    <div className="wrapper">
      <div className={portrait ? 'portrait' : 'container'}>
        <div className="main-image">
          <img src={portrait ? Image2 : Image1} className="image" />
        </div>
        <div className="image-thumbnails-container">
          <div className="image-thumbnails">
            <img src={Image1} className="image image-thumb" />
          </div>
          <div className="image-thumbnails">
            <img src={Main} className="image image-thumb" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridStyle;
