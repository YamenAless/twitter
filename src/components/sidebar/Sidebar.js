import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from '@mui/icons-material/Explore';
import EmailIcon from '@mui/icons-material/Email';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import ViewListIcon from '@mui/icons-material/ViewList';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

const Sidebar = () => {
  return (
    <div className="menu">
      <div className="links">
        
        <NavLink className="link" to={"/"}>
        <div className="icon"><HomeIcon /></div>
          Home</NavLink>
      </div>
      <div className="links">
        
        <NavLink className="link" to={"/somewhere"}>
        <div className="icon"><ExploreIcon /></div>
          Explore</NavLink>
      </div>
      <div className="links">
        <NavLink className="link" to={"/somewhere"}>
        <div className="icon"><EmailIcon /></div>
          
          Messages</NavLink>
      </div>
      <div className="links">
        <NavLink className="link" to={"/somewhere"}>
        <div className="icon"><BookmarksIcon /></div>
          Bookmarks</NavLink>
      </div>
      <div className="links">
        <NavLink className="link" to={"/somewhere"}>
        <div className="icon"><ViewListIcon /></div>
          
          Lists</NavLink>
      </div>
      <div className="links">
        <NavLink className="link" to={"/Profile"}>
        <div className="icon"><PersonIcon /></div>
          Profile</NavLink>
      </div>
      <div className="links">
        <NavLink className="link" to={"/signout"}>
        <div className="icon"><LockIcon /></div>
          Signout</NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
