import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <div className="registerDiv">
        <div>
          <div className="RegisterChildDiv">
            <div className="leftLogin leftRegister">
              <div className="welcomeRegText">
                {/* <h1>LOG</h1> */}
                {/* <h1>WELCOME</h1>
                <h1>BACK</h1> */}
                {/* <h1>WORKOUTS.</h1> */}
              </div>
            </div>
            <div className="rightRegister">
              <div className="credentialsParent">
                <div className="loginLogoParent">
                  <img
                    className="loginLogo"
                    src="https://i.imgur.com/z6spKK9_d.webp?maxwidth=760&fidelity=grand"
                  ></img>
                </div>
                <h1>LOG IN</h1>
                <div className="formParent">
                  <form>
                    <div className="inputfieldParentDiv">
                      <label>Email Address</label>
                      <input
                        className="inputfields"
                        aria-label="Enter Your Email Address"
                        type="text"
                      ></input>
                    </div>
                    <div className="inputfieldParentDiv">
                      <label>Password</label>
                      <input
                        className="inputfields"
                        aria-label="Enter Your Password"
                        type="password"
                      ></input>
                    </div>
                    <div className="submitBtnDiv">
                      <button type="submit" className="submitBtn">
                        SUBMIT
                      </button>
                    </div>
                  </form>
                </div>
                <div className="userAlreadyP">
                  <Link
                    to={"/login"}
                    style={{
                      textDecoration: "none",
                      color: "#838383",
                      marginTop: "0.5vmax",
                    }}
                  >
                    <span className="userAlready">Already a User?</span>
                  </Link>
                </div>
                <hr className="hrReg"></hr>
                <div className="GoogleBtnDiv">
                  <button type="submit" className="googleBtn">
                    <div className="googleBtnChildDiv">
                      <div>
                        <img
                          className="googleImg"
                          src="https://cdn.iconscout.com/icon/free/png-256/free-google-1772223-1507807.png"
                        />
                        Continue with Google
                      </div>
                    </div>
                  </button>
                </div>
                <div className="GoogleBtnDiv">
                  <button
                    type="submit"
                    className="googleBtn"
                    style={{ backgroundColor: "black", color: "white" }}
                  >
                    <div className="googleBtnChildDiv">
                      <div>
                        <img
                          className="AppleImg"
                          src="https://i.ibb.co/rQm66Mg/pngkey-com-apple-logo-png-112773.png"
                        />
                        Continue with Apple
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
