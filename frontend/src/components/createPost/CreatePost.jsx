import React, { useContext, useState } from "react";

import styles from "./createPost.module.scss";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import ModalPost from "../modalPost/ModalPost";
import { MyContext } from "../../hook/context/postState";

export default function CreatePost() {
  const { isCreatePost, setIsCreatePost, isUpdatePost } = useContext(MyContext);
  // Thêm hoặc xóa lớp 'no-scroll' tùy thuộc vào trạng thái của modal
  if (isCreatePost) {
    document.body.classList.add(styles.cancelScroll);
  } else {
    document.body.classList.remove(styles.cancelScroll);
  }

  return (
    <div className={`${styles.createPost} mt-3 px-3 py-3`}>
      {(isUpdatePost || isCreatePost) && <ModalPost />}
      <div className="container-fluid">
        <div className="d-flex align-items-center mt-2">
          <img
            className={`${styles.img} me-4`}
            src="https://jademcallistercom.files.wordpress.com/2016/05/instagram-icon.png"
            alt=""
          />
          <div
            onClick={() => setIsCreatePost(true)}
            className={`${styles.createPostBtn} px-3 d-flex align-items-center`}
          >
            What's on your mind, Username ?
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
          <button className={`${styles.btn} px-3 py-1`}>Share</button>
        </div>
      </div>
    </div>
  );
}
