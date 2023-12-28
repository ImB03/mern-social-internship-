import React, { useContext, useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

import styles from "./post.module.scss";
import DropdownMenu from "../dropdownMenu/DropdownMenu";
import ModalPost from "../modalPost/ModalPost";
import { MyContext } from "../../hook/context/postState";

export default function Post({ post }) {
  const [isDropdownMenu, setIsDropdownMenu] = useState(false);

  return (
    <div className={`${styles.post} position-relative p-3 mb-3`}>
      {isDropdownMenu && (
        <DropdownMenu postId={post._id} setIsDropdownMenu={setIsDropdownMenu} />
      )}
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
          <div
            onClick={() => {
              setIsDropdownMenu(!isDropdownMenu);
            }}
            className={`${styles.option} d-flex justify-content-center align-items-center`}
          >
            <MoreHorizIcon className={`${styles.icon}`} />
          </div>
        </div>
        <div className={`${styles.title} mt-3`}>{post.description}</div>
        <img className={`${styles.img} mt-3`} src={post.picturePath} alt="" />
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
