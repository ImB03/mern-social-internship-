import React, { useContext, useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import LockIcon from "@mui/icons-material/Lock";

import styles from "./post.module.scss";
import DropdownMenu from "../dropdownMenu/DropdownMenu";
import ModalPost from "../modalPost/ModalPost";
import { MyContext } from "../../hook/context/state";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_LIKE_POST } from "../../reducers/slice/postSlice";

export default function Post({ post }) {
  const [isDropdownMenu, setIsDropdownMenu] = useState(false);
  const { setIsDetailPost, handleGetPost } = useContext(MyContext);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.persistedReducer.slice.userNow);

  const handleLike = () => {
    dispatch(ACTION_LIKE_POST(post._id));
  };

  return (
    <div className={`${styles.post} p-3 mb-3`}>
      <div className="container-fluid p-0">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-between align-items-center">
            <img
              className={`${styles.userImg} me-3`}
              src="https://jademcallistercom.files.wordpress.com/2016/05/instagram-icon.png"
              alt=""
            />
            <div>
              <div className={`${styles.userName}`}>{post.creatorName}</div>
              <div className={`${styles.createTime}`}>
                1 min ago <LockIcon className={`${styles.icon}`} />
              </div>
            </div>
          </div>
          <div className={`${styles.option} position-relative`}>
            <div
              onClick={() => {
                setIsDropdownMenu(!isDropdownMenu);
              }}
              className={`${styles.wrapperIcon} position-absolute d-flex justify-content-center align-items-center`}
            >
              <MoreHorizIcon className={`${styles.icon} position-absolute`} />
            </div>

            {isDropdownMenu && (
              <>
                <div
                  onClick={() => {
                    setIsDropdownMenu(false);
                  }}
                  className={`${styles.overlay} position-fixed`}
                ></div>
                <DropdownMenu
                  post={post}
                  setIsDropdownMenu={setIsDropdownMenu}
                />
              </>
            )}
          </div>
        </div>
        <div className={`${styles.title} mt-3`}>{post.description}</div>
        {post.picturePath !== "" && (
          <img className={`${styles.img} mt-3`} src={post.picturePath} alt="" />
        )}
        <div
          className={`${styles.interact} mt-2 pt-1 d-flex justify-content-center align-items-center`}
        >
          <div
            onClick={() => handleLike()}
            className={`${styles.wrapperIcon} py-2 col d-flex justify-content-center align-items-center`}
          >
            {/* <FavoriteBorderOutlinedIcon className={`${styles.icon} me-2`} /> */}

            {post?.likes?.includes(user._id) ? (
              <FavoriteIcon className={`${styles.icon} me-2`} />
            ) : (
              <FavoriteBorderOutlinedIcon className={`${styles.icon} me-2`} />
            )}

            <div className={`${styles.nameInteract}`}>
              {post?.likes.length} Likes
            </div>
          </div>
          <div
            onClick={() => {
              handleGetPost(post._id);
              setIsDetailPost(true);
            }}
            className={`${styles.wrapperIcon} py-2 col d-flex justify-content-center align-items-center`}
          >
            <TextsmsOutlinedIcon className={`${styles.icon} me-2`} />

            <div className={`${styles.nameInteract}`}>Comments</div>
          </div>
          <div
            className={`${styles.wrapperIcon} py-2 col d-flex justify-content-center align-items-center`}
          >
            <ShareOutlinedIcon className={`${styles.icon} me-2`} />

            <div className={`${styles.nameInteract}`}>Share</div>
          </div>
        </div>
      </div>
    </div>
  );
}
