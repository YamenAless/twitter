import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from '@mui/icons-material/Lock';
import '../headNav/Headnav.css'


const HeadNav = () => {
  return (
    <div className="head-nav">
      <div>
        <Link to={"/"} className="head-icon">
          <HomeIcon />
        </Link>
      </div>
      <div>
        <Link className="head-icon" to={"/profile"}>
          <PersonIcon />
        </Link>
      </div>
      <div>
        <Link className="head-icon" to={"/signout"}>
          <LockIcon />
        </Link>
      </div>
    </div>
  );
};

export default HeadNav;
