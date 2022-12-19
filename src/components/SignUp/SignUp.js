import React from "react";
import "./SignUp.css";
import logo from "../../logo.svg";
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const SignUp = () => {


    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        name: "",
      email: "",
      password: "",
      password_confirmation: "",
    });
  
    const handleOnChange = (e) => {
      userData[e.target.name] = e.target.value;
    };
  
    const createUser = async (data) => {
      const res = await fetch("http://ferasjobeir.com/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      console.log(json)
      if (json.success){
        alert(json.messages)
        navigate("/signin");
      }else if(!json.success){
        alert(json.messages)
      }
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      await createUser(userData);
      
    };

  return (
    <div className="signup-parent">
      <div className="row">
        <div className="paper">
          <div className="Register">
            <div className="logo">
              <img src={logo} className={"register-img"} />
            </div>
            <h1 className="Register-title">Create Account</h1>
            <div className="forms">
              <label htmlFor="name" className="label">
                Name
              </label>
              <input type="text"
             className="form-controls" 
              onChange={handleOnChange}
              name="name"
              />
            </div>
            <div className="forms">
              <label htmlFor="email" className="label">
              Email Address
              </label>
              <input 
               type="email"
               className="form-controls"
               onChange={handleOnChange}
               name="email"
               />
            </div>
            <div className="forms">
              <label htmlFor="password" className="label">
              Password
              </label>
              <input
              type="password" 
              className="form-controls"
              name = "password"
              onChange={handleOnChange}

              />
            </div>
            <div className="forms">
              <label htmlFor="name" className="label">
              Password Confirmation
              </label>
              <input type="password"
               className="form-controls"
               name = "password_confirmation"
               onChange={handleOnChange}
               />
            </div>


            <div className="signup-btns">
              <div className="signin-link">
                <Link to={'/signin'} className="signin-link">
                  Login
                </Link>
              </div>
              <div className="col-7">
                <button className="rl-btn" onClick={handleSubmit}>Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
