import React from "react";

const SignUp = () => {
  return (
    <div className="registerDiv">
      <div>
        <div className="RegisterChildDiv">
          <div className="leftRegister">
            <div className="welcomeRegText">
              <h1>LOG</h1>
              <h1>YOUR</h1>
              <h1>DAILY</h1>
              <h1>WORKOUTS.</h1>
            </div>
          </div>
          <div className="rightRegister">
            <div className="credentialsParent">
              <h1>SIGN UP</h1>
              <div className="formParent">
                <form>
                  <div className="inputfieldParentDiv">
                    <label>Name</label>
                    <input className="inputfields" type="text"></input>
                  </div>
                  <div className="inputfieldParentDiv">
                    <label>Email Address</label>
                    <input className="inputfields" type="text"></input>
                  </div>
                  <div className="inputfieldParentDiv">
                    <label>Password</label>
                    <input className="inputfields" type="password"></input>
                  </div>
                  <div className="submitBtnDiv">
                    <button type="submit" className="submitBtn">
                      SUBMIT
                    </button>
                  </div>
                </form>
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
  );
};

export default SignUp;
