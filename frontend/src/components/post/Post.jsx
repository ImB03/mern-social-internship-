import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

import styles from "./post.module.scss";

export default function Post() {
  return (
    <div className={`${styles.post} p-3`}>
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-between align-items-center">
            <img
              className={`${styles.userImg} me-3`}
              src="https://jademcallistercom.files.wordpress.com/2016/05/instagram-icon.png"
              alt=""
            />
            <div>
              <div className={`${styles.userName}`}>John Doe</div>
              <div className={`${styles.createTime}`}>1 min ago</div>
            </div>
          </div>
          <div className={`${styles.option}`}>
            <MoreHorizIcon />
          </div>
        </div>
        <div className={`${styles.title} mt-3`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </div>
        <img
          className={`${styles.img} mt-3`}
          src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <div
          className={`${styles.interact} mt-3 d-flex justify-content-start align-items-center`}
        >
          <div className="me-5 d-flex align-items-center">
            <div className={`${styles.icon} me-2`}>
              <FavoriteBorderOutlinedIcon />
            </div>
            <div className={`${styles.nameInteract}`}>Likes</div>
          </div>
          <div className="me-5 d-flex align-items-center">
            <div className={`${styles.icon} me-2`}>
              <TextsmsOutlinedIcon />
            </div>
            <div className={`${styles.nameInteract}`}>Comments</div>
          </div>
          <div className="me-5 d-flex align-items-center">
            <div className={`${styles.icon} me-2`}>
              <ShareOutlinedIcon />
            </div>
            <div className={`${styles.nameInteract}`}>Share</div>
          </div>
        </div>
      </div>
    </div>
  );
}
