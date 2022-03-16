import React from "react";
import { images } from "../../constants";
import "./Tabs.scss";
import { useState } from "react";

const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="tabs-con">
        <div className="tabs-content">
          <div className="icon">
            <div className="icon-con">
              <div>
                <img src={images.refresh} alt="refresh" />
              </div>
              <div>
                <img src={images.assignment} alt="assignment" />
              </div>
              <div>
                <img src={images.download} alt="download" />
              </div>
              <div>
                <img src={images.zip} alt="zip" />
              </div>
            </div>
          </div>
          <div className="bloc-tabs">
            <div className="tabs-bar">
              <button
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                Result
              </button>
              <button
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
              >
                Response
              </button>
            </div>
          </div>

          <div className="content-tabs">
            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }
            >
              <div className="result-con">
                <div className="result-con-l">
                  <div className="con-l-1">
                    <div className="table-1">
                      <h3>
                        Processing time :<h2> 0.256s</h2>
                      </h3>
                      <h3>
                        Upload/Download:<h2> 1.637s</h2>
                      </h3>
                      <h3>
                        Total time :<h2> 1.893s</h2>
                      </h3>
                    </div>
                  </div>
                  <div className="con-l-2">
                    <div>
                      <h1>Portrait</h1>
                      <img className="face" src={images.face} alt="face" />
                    </div>

                    <div>
                      <h1>Cropped image</h1>
                      <img
                        className="crop-img"
                        src={images.passport5}
                        alt="passport5"
                      />
                    </div>
                  </div>
                </div>
                <div className="result-con-r">
                  <table className="table-2">
                    <thead>
                      <tr>
                        <th>Field type</th>
                        <th>MRZ</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Month to expire</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>Document #</td>
                        <td>OO0000000</td>
                      </tr>
                      <tr>
                        <td>Date of expiry</td>
                        <td>2015-01-01</td>
                      </tr>
                      <tr>
                        <td>Personal #</td>
                        <td>4010160B000PB3</td>
                      </tr>
                      <tr>
                        <td>Issuing state</td>
                        <td>Belarus</td>
                      </tr>
                      <tr>
                        <td>Nationality</td>
                        <td>Belarus</td>
                      </tr>
                      <tr>
                        <td>Age</td>
                        <td>51</td>
                      </tr>
                      <tr>
                        <td>Given name</td>
                        <td>TATSIANA</td>
                      </tr>
                      <tr>
                        <td>Surname</td>
                        <td>IVANOVA</td>
                      </tr>
                      <tr>
                        <td>Final check digit</td>
                        <td>6</td>
                      </tr>
                      <tr>
                        <td>Check digit for optional data</td>
                        <td>2</td>
                      </tr>
                      <tr>
                        <td>MRZ lines</td>
                        <td>
                          OO00000000BLR7001017F15010104010160B000PB3264010160B000PB3
                        </td>
                      </tr>
                      <tr>
                        <td>Optional data</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>Check digit for date of expiry</td>
                        <td>F</td>
                      </tr>
                      <tr>
                        <td>Sex</td>
                        <td>7</td>
                      </tr>
                      <tr>
                        <td>Check digit for date of birth</td>
                        <td>1970-01-01</td>
                      </tr>
                      <tr>
                        <td>Date of birth</td>
                        <td>1BLR</td>
                      </tr>
                      <tr>
                        <td>Nationality code</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>Check digit for document number</td>
                        <td>IVANOVA TATSIANA</td>
                      </tr>
                      <tr>
                        <td>Surname and given names</td>
                        <td>BLR</td>
                      </tr>
                      <tr>
                        <td>Issuing state code</td>
                        <td>P</td>
                      </tr>
                      <tr>
                        <td>Document class code</td>
                        <td>ID-3</td>
                      </tr>
                      <tr>
                        <td>MRZ Type</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Place of birth</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Date of issue</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Age at issue</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Years since issue</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }
            >
              <div className="response-con">
                <div className="response-con-l">
                  <ul>
                    <li>
                      <a href="#">Status</a>
                    </li>
                    <li>
                      <a href="#">Graphic Fields</a>
                    </li>
                    <li>
                      <a href="#">Text Fields</a>
                    </li>
                    <li>
                      <a href="#">Document images</a>
                    </li>
                    <li>
                      <a href="#">Document type</a>
                    </li>
                    <li>
                      <a href="#">Authenticity</a>
                    </li>
                  </ul>
                </div>
                <div className="response-con-r">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    iste excepturi cupiditate debitis tempore eveniet dicta
                    minus hic ab placeat sapiente veritatis aperiam ea, dolores,
                    neque qui laborum numquam rerum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
