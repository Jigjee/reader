import React from "react";
import { images } from "../../constants";
import "./Content.scss";

const Content = () => {
  return (
    <div className="container">
      <div className="content-con">
        <div className="content-upload">
          <h1>Use your own image</h1>
          <div className="content-btn">
            <button className="photo-btn">
              <img src={images.camera} alt="camera" />
            </button>
            <button className="load-btn">
              <img src={images.upload} alt="upload" />
            </button>
          </div>
          <div className="inform">
            <div className="inform-1">
              <input type="text" placeholder="   Use Image URL" />
              <button className="inform-btn">
                <img src={images.arrow} alt="arrow" />
              </button>
            </div>
            <p>or drag & drop your image</p>
          </div>
        </div>

        <div className="passport-photo">
          <h1>Choose a sample images</h1>
          <div className="photo-con">
            <div>
              <img src={images.passport3} alt="passport3" />
            </div>
            <div>
              <img src={images.passport4} alt="passport4" />
            </div>
            <div>
              <img src={images.passport1} alt="passport1" />
            </div>
            <div>
              <img src={images.passport2} alt="passport2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
