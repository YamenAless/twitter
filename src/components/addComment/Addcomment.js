import React from "react";
import "./Addcomment.css";
import { useState, useContext, useEffect } from "react";
import { DataCtx } from "../../components/context/SaveData/SaveData";
import dayjs from "dayjs";
import {useRef} from 'react'

const Addcomment = ({ item, posts, setPosts }) => {
  const { token } = useContext(DataCtx);
  const [comments, SetComments] = useState([]);
  const [commentData, setCommentData] = useState({
    content: "",
    post_id: item.id,
  });
   const remove = useRef()
  const hundleOnChange = (e) => {
    commentData[e.target.name] = e.target.value;
  };

  useEffect(() => {
    fetch(`http://ferasjobeir.com/api/posts/${item.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((json) => SetComments(json.data.comments));
  }, []);

  const sendComment = async () => {
    const res = await fetch("http://ferasjobeir.com/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(commentData),
    });
    const json = await res.json();
    if(json.success && remove.current.value  ===  ""){
      return
     }
    if (json.success) {
      SetComments([ ...comments, json.data]);
      const NewArrData = [...posts]
      console.log(comments)
      const CCT = NewArrData.findIndex(singleItem => singleItem.id === item.id)
      NewArrData[CCT].comments_count = parseInt(comments.length)  + 1 
      setPosts(NewArrData)
      remove.current.value = "";
    }

      
  
  };

  return (
    <div>
      {comments?.map((item) => (
        <div className="comments" key={item.id}>
          <div className="comment">
            <img src={item.user.avatar} />
            <div>
              <h3 className="comment_name">{item.user.name}</h3>
              <h6 className="comment_datetime">
                {dayjs(item.created_at).fromNow()}
              </h6>
              <p className="content">{item.content}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="add-comment">
        <input
          placeholder="Add a new comment"
          className="input-faild"
          type={"text"}
          name="content"
          onChange={hundleOnChange}
          ref={remove}
        />
        <input
          className="btn"
          type={"button"}
          value={"Add"}
          onClick={sendComment}
        />
      </div>
    </div>
  );
};

export default Addcomment;
