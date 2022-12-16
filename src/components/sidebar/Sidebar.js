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
        <div className="icon"><HomeIcon /></div>
        <NavLink className="link" to={"/"}>Home</NavLink>
      </div>
      <div className="links">
        <div className="icon"><ExploreIcon /></div>
        <NavLink className="link" to={"/Explore"}>Explore</NavLink>
      </div>
      <div className="links">
        <div className="icon"><EmailIcon /></div>
        <NavLink className="link" to={"/Messages"}>Messages</NavLink>
      </div>
      <div className="links">
        <div className="icon"><BookmarksIcon /></div>
        <NavLink className="link" to={"/Bookmarks"}>Bookmarks</NavLink>
      </div>
      <div className="links">
        <div className="icon"><ViewListIcon /></div>
        <NavLink className="link" to={"/Lists"}>Lists</NavLink>
      </div>
      <div className="links">
        <div className="icon"><PersonIcon /></div>
        <NavLink className="link" to={"/Profile"}>Profile</NavLink>
      </div>
      <div className="links">
        <div className="icon"><LockIcon /></div>
        <NavLink className="link" to={"/Signout"}>Signout</NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
