import React from "react";
import Layout from "../Layout/Layout";
import "./Home.css";
import logo from "../../logo.svg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Addcomment from "../addComment/Addcomment";
const Home = () => {
  return (
    <Layout title="Home">
      <div className="new">
        <img
          className="user-avatar"
          src={"https://avatars.githubusercontent.com/u/79771322?v=4"}
          alt={"user-icon"}
        />
        <div className="textarea">
          <textarea placeholder="What is happening?"></textarea>
          <button className="create-btn">Create Post</button>
        </div>
      </div>
      <div className="tweets"></div>
      <div className="post">
        <div className="post-content">
          <img src="https://avatars.githubusercontent.com/u/79771322?v=4" />
          <div>
            <h3 className="name">user</h3>
            <h6 className="datetime">1 hour ago</h6>
            <p>tweets content</p>
            <div className="likes-comments">
              <div className="like-btn">
                <FavoriteBorderIcon />
                <div className="likes_count">0</div>
              </div>
              <div className="comment-btn">
                <ChatBubbleOutlineIcon />
                <div className="comments_count">0</div>
              </div>
            </div>
          </div>
        </div>
       <Addcomment/>
      </div>
    </Layout>
  );
};

export default Home;
