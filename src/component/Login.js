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
          <span class="material-icons">person</span>
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
          <span class="material-icons">phone_in_talk</span>
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
        <button className="" type="button">
          <Link to="plan" className="link"> Next</Link>
        </button>
      </div>
    </div>
  );
}
