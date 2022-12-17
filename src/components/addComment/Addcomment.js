import React from "react";
import "./Addcomment.css";

const Addcomment = () => {
  return (
    <div className="comments">
      <div className="comment">
        <img src="https://avatars.githubusercontent.com/u/79771322?v=4" />
        <div>
          <h3 className="comment_name">user</h3>
          <h6 className="comment_datetime">1 hour ago</h6>
          <p className="content">tweets content</p>
        </div>
      </div>
      <div className="add-comment">
        <input  placeholder="Add a new comment" className="input-faild" type={"text"} />
        <input className="btn" type={"button"} value={"Add"} />
      </div>
    </div>
  );
};

export default Addcomment;
