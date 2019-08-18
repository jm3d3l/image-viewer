import React from "react";
import "./gridStyle.scss";

import Main from "../../images/main-image.jpg";
import Image0 from "../../images/image0.jpg";
import Image1 from "../../images/image1.jpg";
import Image2 from "../../images/image2.jpg";
// const images = [
//     {
//       mainImage: Main,
//       name: "main-image"
//     },
//     {
//       mainImage: Image0,
//       name: "image 0"
//     },
//     {
//       mainImage: Image1,
//       name: "image 1"
//     },
//     {
//       mainImage: Image2,
//       name: "image 2"
//     }
//   ];
const GridStyle = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="main-image">
          <img src={Image2} className="image" />
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
