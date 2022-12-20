import React, { useRef } from "react";
import Layout from "../Layout/Layout";
import "./Profile.css";
import { DataCtx } from "../../components/context/SaveData/SaveData";
import { useState, useContext, useEffect } from "react";
import Loadin from "../loading/Loadin";

const Profile = () => {
  const { token, user , signIn } = useContext(DataCtx);
  const [alert , setAlert] = useState(false)
  const [sendContent, setSendContent] = useState({
    name: user.name,
    email: user.email,
    password: "",
    avatar:user.avatar
  });
  const fileRef= useRef()

  const UpadeProfile = async (e) => {
    e.preventDefault();
    const fromData = new FormData(e.target);
  const resp = await  fetch("http://ferasjobeir.com/api/users/me", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: fromData,
    })
    const json = await resp.json()
    if(json.success){
    window.alert(json.messages)
      setSendContent({...json.data, password:""})
      localStorage.setItem("user", JSON.stringify(json.data))
    }else{
    window.alert(json.messages)
    }
  }

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://ferasjobeir.com/api/users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((json) => setData(json.data.posts));
  }, []);

  const deletPost = async (id) => {
      const res = await fetch(`http://ferasjobeir.com/api/posts/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const json = await res.json();
    if (json.success) {
      window.confirm("Are you sure you want to delete your post ?")
      const NewData = [...data];
      const findeInd = NewData.filter((l) => l.id !== id )
      setData(findeInd);
     
    
  }
    }

  return (
    <Layout title="Profile">
      <form onSubmit={UpadeProfile}>
        <div className="form">
          <div className="alert alert-info">My Information</div>
          <div className="form-field mb-3 person-avatar">
            <label htmlFor="avatar" className="mx-auto my-2 d-block w-25">
              <img src={sendContent.avatar} className="img" onClick={()=> fileRef.current.click()} />
            </label>
          </div>
          <input
            name="avatar"
            type="file"
            className="position-absolute"
            style={{display: 'none'}}
            ref={fileRef}
          />
          <br />
          <div className="form-field mb-3">
            <label htmlFor="name" className="mb-2">
              <small>
                Name
                <span className="text-danger" style={{ color: "red" }}>
                  *
                </span>
              </small>
            </label>
            <input
              name="name"
              type="text"
              className="form-control"
              value={sendContent.name}
              onChange={(e) => {
                setSendContent({
                  ...sendContent,
                  name: e.target.value,
                });
              }}
            />
          </div>
          <div className="form-field mb-3">
            <label htmlFor="email" className="mb-2">
              <small>
                Email Address
                <span
                  className="text-danger"
                  style={{
                    color: "red",
                  }}
                >
                  *
                </span>
              </small>
            </label>
            <input
              name="email"
              type="email"
              className="form-control"
              value={sendContent.email}
              onChange={(e) => {
                setSendContent({
                  ...sendContent,
                  email: e.target.value,
                });
              }}
            />
          </div>
          <div className="form-field mb-3">
            <label htmlFor="password" className="mb-2">
              <small>Password</small>
            </label>
            <input
              name="password"
              type="Password"
              className="form-control"
              value={sendContent.password}
              onChange={(e) => {
                setSendContent({
                  ...sendContent,
                  password: e.target.value,
                });
              }}
            />
          </div>

          <div className="form-field mb-3">
            <label htmlFor="new_password" className="mb-2">
              <small>New Password</small>
            </label>
            <input
              name="new_password"
              type="password"
              className="form-control"
              onChange={(e) => {
                setSendContent({
                  ...sendContent,
                  new_Password: e.target.value,
                });
              }}
            />
          </div>

          <div className="form-field mb-3">
            <label htmlFor="new_Password_Confirmation" className="mb-2">
              <small>New Password Confirmation</small>
            </label>
            <input
              name="new_Password_Confirmation"
              type="password"
              className="form-control"
              onChange={(e) => {
                setSendContent({
                  ...sendContent,
                  new_Password_Confirmation: e.target.value,
                });
              }}
            />
          </div>
          <input type="hidden" name="_method" value="put" />
          <div className="form-field mb-3">
            <button type="submit" className="btn ">
              Update Profile
            </button>
          </div>
        </div>
      </form>
      <div className="alert p-3">
        <div className="alert alert-info">My Posts</div>

        <ul className="list-group">
          {data?.map((item) => (
            <li className="list-group-item" key={item?.id}>
              <span className="hide-extra">{item?.content}</span>
              <span>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => {
            
                    deletPost(item?.id);
                    
                  }}
                >
                  Delete
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Profile;
