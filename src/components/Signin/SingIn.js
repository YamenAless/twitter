import React from "react";
import '../SignUp/SignUp.css'
import logo from "../../logo.svg";
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useContext , useState } from "react";
import {DataCtx} from '../context/SaveData/SaveData'

const Signin = () => {

  const {signIn } = useContext(DataCtx)
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    userData[e.target.name] = e.target.value;
  };

  const createUser = async (data) => {
    const res = await fetch("http://ferasjobeir.com/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    if (json.success) {
      signIn(json.data,json.token,json.avatar)
      alert(json.messages);
      navigate("/");
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
            <h1 className="Register_title">Login</h1>
        
            <div className="forms">
              <label htmlFor="name" className="label">
              Email Address
              </label>
              <input type="email"
               className="form-controls" 
               name="email"
               onChange={handleOnChange}
               />
            </div>
            <div className="forms">
              <label htmlFor="name" 
              className="label">
              Password
              </label>
              <input type="password" 
              className="form-controls" 
              name="password"
              onChange={handleOnChange}
              />
            </div>

            <div className="signup-btns">
              <div className="signin-link">
                <Link to={'/signup'} className="signin-link">
                Register
                </Link>
              </div>
              <div className="col-7">
                <button className="rl-btn" onClick={handleSubmit}>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
