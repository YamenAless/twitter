import { color, fontSize, fontWeight, height, margin } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const NotFound = () => {
  const Navigate = useNavigate();
  const [open , setOpen] = useState(false)
  useEffect(()=>{
    setTimeout(() => {
      Navigate("/someWhere");
    }, 2000);
  },[open])
  

  return (
    <div>
      <Link
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          width: "400px",
          height: "400px",
          marginLeft: "500px",
          marginTop: "250px",
          textDecoration: "none",
          color: "blueviolet",
          fontSize: "25pt",
          fontWeight: "900",
        }}
        to={"/Signup"}
      >
        <div onClick={() => {setOpen(true)}}>
          Join us
        </div>
      </Link>
    </div>
  );
};

export default NotFound;
