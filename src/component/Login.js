import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";



export default function Login() {
  return (
    <div>
      {/* <div className="login-top-main">
        <div className="login-text">Give us your<br/> <strong>basic details</strong></div>
      </div> */}
        <div className="addRoom-title-cont">
        <div className="addRoom-title-inner">
          <span
            style={{

              fontWeight: "400",
              fontSize: "36px",
              LineHeight: "49.18px",
            }}
          >
            Give us your
          </span>
          <br />
          <span
            style={{
              fontWeight: "700",
              fontSize: "36px",
              LineHeight: "49.18px",
            }}
          >basic details
          </span>
        </div>
      </div>

      <div className="input-group mb-3 mt-3 input-w">
        <span className="input-group-text icon-user" id="basic-addon1">
          <img className="login-useicon" src={process.env.PUBLIC_URL+"assets/icon/Group 5.png"} alt="user"/>
        </span>
        <input
          type="text"
          className="form-control user-input"
          placeholder="Name"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="input-group mb-3 mt-3 input-w ">
        <span className="input-group-text icon-user" id="basic-addon1">
        <img className="login-useicon" src={process.env.PUBLIC_URL+"assets/icon/Group 4.png"} alt="phone"/>
        </span>
        <input
          type="text"
          className="form-control user-input"
          placeholder="Phone Number"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="login-next-btn-container">
        <Link className="link" to="plan">
        <div className="login-next-btn"><span className="login-next-btn-text">Next</span></div>
        </Link>
      </div>
    </div>
  );
}
