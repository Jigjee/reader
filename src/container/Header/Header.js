import React from "react";

import { images } from "../../constants";
import "./Header.scss";

const Header = () => {
  return (
    <div className="container">
      <div className="header-con">
        <div className="logo">
          <img src={images.logo} alt="logo" />
        </div>
        <div className="header-btn">
          <a href="#" className="btn-l">
            Login
          </a>
          <a href="#" className="btn-r">
            Register
          </a>
        </div>
      </div>

      <div className="content-head">
        <div className="content-l">
          <h1>E-KYC Document Reader</h1>
          <p>
            Fast and accurate data extraction from identity documents
            <br /> On-premise and cloud integration.
          </p>
        </div>
        <div className="content-r">
          <img src={images.frame1} alt="frame1" />
        </div>
      </div>
    </div>
  );
};

export default Header;
