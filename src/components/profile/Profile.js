import React from "react";
import Layout from "../Layout/Layout";
import "./Profile.css";

const Profile = () => {
  return (
    <Layout title="Profile">
      <form>
        <div className="form">
          <div className="alert alert-info">My Information</div>
          <div className="form-field mb-3 person-avatar">
            <label htmlFor="avatar" className="mx-auto my-2 d-block w-25">
              <img
                src="https://www.ferasjobeir.com/storage/public/bb0ZUV6yBVNmjf7XhYMaxsmp1o9m4PGNguW18E2S.png"
                className="img"
              />
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#FFF"
                    d="M5 5h-3v-1h3v1zm8 5c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm11-4v15h-24v-15h5.93c.669 0 1.293-.334 1.664-.891l1.406-2.109h8l1.406 2.109c.371.557.995.891 1.664.891h3.93zm-19 4c0-.552-.447-1-1-1-.553 0-1 .448-1 1s.447 1 1 1c.553 0 1-.448 1-1zm13 3c0-2.761-2.239-5-5-5s-5 2.239-5 5 2.239 5 5 5 5-2.239 5-5z"
                  ></path>
                </svg>
              </div>
            </label>
          </div>
          <div className="form-field mb-3">
            <label htmlFor="name" className="mb-2">
              <small>
                Name{" "}
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
            <input name="name" type="text" id="name" className="form-control" />
          </div>
          <div className="form-field mb-3">
            <label htmlFor="email" className="mb-2">
              <small>
                Email Address{" "}
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
            <input name="email" type="email" className="form-control" />
          </div>
          <div className="form-field mb-3">
            <label htmlFor="Password" className="mb-2">
              <small>Password</small>
            </label>
            <input name="Password" type="Password" className="form-control" />
          </div>
          <div className="form-field mb-3">
            <label htmlFor="New Password" className="mb-2">
              <small>New Password</small>
            </label>
            <input
              name="New Password"
              type="password"
              className="form-control"
            />
          </div>

          <div className="form-field mb-3">
            <label htmlFor="New Password Confirmation" className="mb-2">
              <small>New Password Confirmation</small>
            </label>
            <input
              name="New_Password_Confirmation"
              type="password"
              className="form-control"
            />
          </div>

          <div className="form-field mb-3">
            <button type="submit" className="btn ">
              Update Profile
            </button>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default Profile;
