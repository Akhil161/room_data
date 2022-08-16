import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";



export default function Login() {
  return (
    <div>
      <div className="login-top">
        <p className="login-text">Give us your<br/> <strong>basic details</strong></p>
      </div>

      <div className="input-group mb-3 mt-3 input-w">
        <span className="input-group-text icon-user" id="basic-addon1">
          <img className="login-useicon" src={process.env.PUBLIC_URL+"assets/icon/Group 5.png"}/>
        </span>
        <input
          type="text"
          className="form-control user-input"
          placeholder="Name"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="input-group mb-3 mt-3 input-w">
        <span className="input-group-text icon-user" id="basic-addon1">
        <img className="login-useicon" src={process.env.PUBLIC_URL+"assets/icon/Group 4.png"}/>
        </span>
        <input
          type="text"
          className="form-control user-input"
          placeholder="Phone Number"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="d-grid gap-2 d-md-block next-btn mt-4" >
      <Link to="plan" className="link"><button style={{width:"100%"}} type="button">
           Next
        </button></Link>
      </div>
    </div>
  );
}
