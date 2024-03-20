import React, { useContext, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./createPost.module.scss";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import ModalPost from "../modalPost/ModalPost";
import { MyContext } from "../../hook/context/state";

export default function CreatePost() {
  const { setIsCreatePost } = useContext(MyContext);
  const userNow = useSelector((state) => state.persistedReducer.slice.userNow);

  return (
    <div className={`${styles.createPost} mt-3 px-3 py-3`}>
      <div className="container-fluid p-0">
        <div className="d-flex align-items-center">
          <div className="">
            <Link to={`/profile/${userNow._id}`}>
              <img
                className={`${styles.userAvatar}`}
                src={`http://localhost:19000/assets/${
                  userNow.userAvatar !== ""
                    ? userNow.userAvatar
                    : "defaultUserAvatar.png"
                }`}
                alt=""
              />
            </Link>
          </div>
          <div
            onClick={() => {
              setIsCreatePost(true);
            }}
            className={`${styles.createPostBtn} col ms-3 px-3 d-flex align-items-center`}
          >
            What's on your mind, {userNow.userName} ?
          </div>
        </div>
        <hr className={`${styles.hr} my-3`} />
        <div className="my-2 d-flex justify-content-between align-items-center">
          <div
            className={`${styles.option} d-flex justify-content-between align-items-center`}
          >
            <div className="d-flex justify-content-between align-items-center me-5">
              <img className={`${styles.icon} me-2`} src={Image} alt="" />
              <div className={`${styles.name}`}>Add Image</div>
            </div>
            <div className="d-flex justify-content-between align-items-center me-5">
              <img className={`${styles.icon} me-2`} src={Map} alt="" />
              <div className={`${styles.name}`}>Add Place</div>
            </div>
            <div className="d-flex justify-content-between align-items-center me-5">
              <img className={`${styles.icon} me-2`} src={Friend} alt="" />
              <div className={`${styles.name}`}>Tag Friends</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
