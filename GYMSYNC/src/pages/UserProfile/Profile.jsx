import React from "react";
import { SearchNormal1 } from "iconsax-react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import MobileNavbar from "../../components/MobileNavbar";
const Profile = () => {
  return (
    <div>
       <Navbar />
      <Sidebar />
      <MobileNavbar />
      <div className="firstChildTopContent">
        <div className="flex">
          <div className="profileParentGrid">
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
              <div className="userInfo">
                <h1>JOHN DOE</h1>
                <p>PREMIUM MEMBER</p>
              </div>
            </div>
            <div className="profileChildGrids bgprofiles">
              <div className="trainerCard">
                <h1 className="trainerCardHeader">TRAINER</h1>
                <div className="trainerDp">
                  <img src="https://i.imgur.com/rDBctED.png"></img>
                </div>
                <h1 className="trainerName">ALEX COSTA</h1>
              </div>
            </div>
            <div className="profileChildGrids bgprofiles">
              <div className="picker">
                <div>
                  <img
                    className="pickerImg"
                    src="https://i.imgur.com/EHAG723.png"
                  ></img>
                  <div className="heightDiv">
                    <p>HEIGHT (cm)</p>
                    <h1>173</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="profileChildGrids bgprofiles">
              <div className="scale">
                <div>
                  <div className="weightDiv">
                    <p>WEIGHT (kg)</p>
                    <h1>75</h1>
                  </div>
                  <div className="scaleImgDiv">
                    <img
                      className="scaleImg"
                      src="https://i.imgur.com/cE8N3PL.png"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="profileChildGrids bgprofiles">
              <div className="BMIParentDiv">
                <div className="BMIDiv">
                  <p className="BMIHeader">BMI</p>
                  <h1>21</h1>
                  <p className="statusBmi">NORMAL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
