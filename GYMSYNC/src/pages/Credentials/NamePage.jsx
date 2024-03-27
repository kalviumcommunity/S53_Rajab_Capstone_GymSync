import { ArrowRight } from "iconsax-react";
import React from "react";
import { Link } from "react-router-dom";
const NamePage = () => {
  function handleChange(e) {
    console.log(e.target.value);
  }
  return (
    <div>
      <div className="registerDiv">
        <div>
          <div className="RegisterChildDiv">
            <div className="leftCred leftRegister ">
              <div className="welcomeRegText">
                <div
                  className="profileChildGrids userCard"
                  style={{ gridColumn: "span 2" }}
                >
                  <div>
                    <img
                      className="profileDp"
                      src="https://i.imgur.com/zmizd2I.png"
                    ></img>
                    <img
                      className="gymIcon"
                      src="https://i.imgur.com/UMlpIAT.png"
                    ></img>
                  </div>
                  <div className="userInfo userCred">
                    <h1>JOHN DOE</h1>
                    <p>PREMIUM MEMBER</p>
                  </div>
                </div>
                {/* <h1>LOG</h1> */}
                {/* <h1>WELCOME</h1>
              <h1>BACK</h1> */}
                {/* <h1>WORKOUTS.</h1> */}
              </div>
            </div>
            <div className="rightRegister">
              <div className="ParentCred">
                <div className="ChildCred">
                  <div className="logoCredDiv">
                    <img
                      className="credLogo"
                      src="https://i.imgur.com/z6spKK9_d.webp?maxwidth=760&fidelityx=grand"
                    />
                  </div>
                  <div className="credTexts">
                    <h1>WHAT</h1>
                    <h1>SHOULD</h1>
                    <h1>
                      WE CALL <span className="YouText"> YOU?</span>
                    </h1>
                  </div>
                  <div className="credTextInp">
                    <label>Nickname</label>
                    <input className="credinput" type="text"></input>
                  </div>
                </div>
              </div>
              <div className="credFlex">
                <div className="nextBtn">
                  <div>
                    <img
                      className="arrow"
                      src="https://i.imgur.com/RutTs7Y_d.webp?maxwidth=760&fidelity=grand"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NamePage;
