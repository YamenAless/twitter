import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Addcomment from "../addComment/Addcomment";
import { useState, useContext, useEffect } from "react";
import { DataCtx } from "../../components/context/SaveData/SaveData";
import logo from "../../logo.svg";
import dayjs from "dayjs";
import "./SinglePost.css";
const SinglePost = ({ item, posts, setPosts }) => {
  var relativeTime = require("dayjs/plugin/relativeTime");
  dayjs.extend(relativeTime);
  const [openComment, setOpenComment] = useState(false);
  const { token } = useContext(DataCtx);

  const like = async () => {
    const resp = await fetch(
      `http://ferasjobeir.com/api/posts/${
        item?.liked_by_current_user ? "unlike " : "like"
      }`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ post_id: item.id }),
      }
    );
    const json = await resp.json();
    if (json.success) {
      const NewData = [...posts];
      const findeId = NewData.findIndex(
        (singleId) => singleId.id === json.data.id
      );
      NewData[findeId] = json.data;
      setPosts(NewData);
    }
  };

  return (
    <div>
      <div className="post" key={item?.id}>
        <div className="post-content" key={item?.id}>
          <img src={item?.user.avatar} />
          <div>
            <h3 className="name">{item?.user.name}</h3>
            <h6 className="datetime">{dayjs(item?.created_at).fromNow()}</h6>
            <p>{item?.content}</p>
            <div className="likes-comments">
              <div className="like-btn" onClick={like}>
                {item?.liked_by_current_user ? (
                  <FavoriteIcon
                    sx={{
                      color: "red",
                    }}
                  />
                ) : (
                  <FavoriteBorderIcon />
                )}

                <div className="likes_count">{item?.likes_count}</div>
              </div>
              <div
                className="comment-btn"
                onClick={() => {
                  setOpenComment(true);
                  if (openComment) {
                    setOpenComment(false);
                  }
                }}
              >
                <ChatBubbleOutlineIcon />
                <div className="comments_count">{item?.comments_count}</div>
              </div>
            </div>
          </div>
        </div>
        {openComment && (<Addcomment item={item} posts={posts} setPosts={setPosts} />)}
      </div>
    </div>
  );
};

export default SinglePost;
