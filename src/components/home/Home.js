import React from "react";
import Layout from "../Layout/Layout";
import "./Home.css";
import SinglePost from "../SinglePost/SinglePost";
import { useState, useContext, useEffect } from "react";
import { DataCtx } from "../../components/context/SaveData/SaveData";
import {useRef} from 'react'
import Loadin from "../loading/Loadin";

const Home = () => {
  const { token ,user } = useContext(DataCtx);
  const [pageNum , setPageNum] = useState({})
  const [posts, setPosts] = useState([]);
  const [num, setNum] = useState(1);
  const [loading , setLoading]  = useState(true)
  const clear = useRef()

  const handleOnScroll = () => {
    let userScrollH =
      document.documentElement.clientHeight + document.documentElement.scrollTop + 1;
    let windowBottomHeight = document.documentElement.offsetHeight;
    if (userScrollH >= windowBottomHeight ) { 
        setNum(num + 1);
    }

    if(num >= pageNum.last_page){
    setLoading(false)
   
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => handleOnScroll());
    return () => {
      if (typeof window !== "undefined")
        window.removeEventListener("scroll", () => handleOnScroll());
    };
  }, [
    document.documentElement.clientHeight + document.documentElement.scrollTop,
  ]);


  const getPosts = async (count) => {
    if(loading){
      const res = await fetch(`http://ferasjobeir.com/api/posts?page=${count}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const json = await res.json();
      setPageNum({...json.data})
      if (json.success) {
        setPosts([...posts, ...json.data.data]);
  

      }
    }

    
  };



  useEffect(() => {
    getPosts(num);
  }, [num]);

  const [sendContent, setSendPost] = useState({
    content: "",
  });
  const onChange = (e) => {
    sendContent[e.target.name] = e.target.value;
  };


  const sendPost = async () =>{
   const res = await fetch("http://ferasjobeir.com/api/posts" , {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(sendContent)
    });
    const json = await res.json()
    if(json.success){
      const newPosts = [json.data,...posts]
      clear.current.value = ""
      setPosts([...newPosts])
      setLoading(false);
    }else if(!json.success){
      alert(json.messages)
    }  
  } 

  return (
    <Layout title="Home">
      <div className="new">
        <img
          className="user-avatar"
          src={user.avatar}
          alt={"user-icon"}
        />
        <div className="textarea">
          <textarea
            name="content"
            placeholder="What is happening?"
            onChange={onChange}
            ref={clear}
            spellCheck={"false"}
          ></textarea>
          <button className="create-btn" onClick={sendPost} >Create Post</button>
        </div>
      </div>
      <div className="tweets"></div>
      {posts.map((item) => (
        <SinglePost key={item.id} posts={posts} setPosts={setPosts} item={item} />
      ))}
      {loading && <Loadin /> }
      {/* {loading && <div className="last-Page">The end of the posts</div>} */}
      
    </Layout>
  );
};

export default Home;
