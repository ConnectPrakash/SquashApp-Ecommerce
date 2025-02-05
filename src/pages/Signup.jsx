import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Signup.css'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function Signup() {
  const navigate = useNavigate();
  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [phone, setPhone] = useState();
  function handleProperty(value){
    
  }
  function handleChange(value) {
    setPhone(value);
  }
  return (
    <div>
      <div className="Login-cont">
        <h2>Create Account</h2>
        <div className="Login-input">
          <input type="text" placeholder="Enter Name" value={name} onChange={(e) => {handl}}></input>
        </div>
        <div className="Login-phone">
          <PhoneInput
            country={"us"}
            value={phone}
            onChange={handleChange}
            inputProps={{
              required: true,
            }}
          ></PhoneInput>
        </div>
        <div className="Login-input">
          <input type="email" placeholder="Email" value={email} onCha></input>
        </div>
        <div className="Login-input">
          <input type="password" placeholder="Password" value={password}></input>
        </div>
        <div className="Login-btn">
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            Sign up
          </button>
        </div>
        <p>
          You already have an account ? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
