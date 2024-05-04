import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import authScreenAtom from "../../atoms/authAtoms";
import userAtom from "../../atoms/userAtoms";
const Login = () => {
  const setAuthScreenState = useSetRecoilState(authScreenAtom);
  const setUser = useSetRecoilState(userAtom);

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });
      const data = await res.json();
      if (data.error) {
        alert(data.error);
        return;
      }
      localStorage.setItem("user-gymSync", JSON.stringify(data));
      setUser(data);
    } catch (error) {
      alert(error);
    }
  };

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
                      <label>Username</label>
                      <input
                        className="inputfields"
                        aria-label="Enter Your Email Address"
                        type="text"
                        onChange={(e) =>
                          setInputs((inputs) => ({
                            ...inputs,
                            username: e.target.value,
                          }))
                        }
                      ></input>
                    </div>
                    <div className="inputfieldParentDiv">
                      <label>Password</label>
                      <input
                        className="inputfields"
                        aria-label="Enter Your Password"
                        type="password"
                        onChange={(e) =>
                          setInputs((inputs) => ({
                            ...inputs,
                            password: e.target.value,
                          }))
                        }
                      ></input>
                    </div>
                    <div className="submitBtnDiv">
                      <button
                        type="submit"
                        className="submitBtn"
                        onClick={handleLogin}
                      >
                        SUBMIT
                      </button>
                    </div>
                  </form>
                </div>
                <div className="userAlreadyP">
                  <Link
                    onClick={() => setAuthScreenState("signup") }
                    style={{
                      textDecoration: "none",
                      color: "#838383",
                      marginTop: "0.5vmax",
                    }}
                  >
                    <span className="userAlready">New Here? Click Here!</span>
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
