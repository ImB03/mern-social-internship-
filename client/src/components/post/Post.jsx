import React, { useContext, useState, useRef, useEffect } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import LockIcon from "@mui/icons-material/Lock";
import { Link, useLocation, useParams } from "react-router-dom";
import { Image } from "cloudinary-react";

import styles from "./post.module.scss";
import DropdownMenu from "../dropdownMenu/DropdownMenu";
import ModalPost from "../modalPost/ModalPost";
import { MyContext } from "../../hook/context/state";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_LIKE_POST } from "../../reducers/slice/postSlice";

export default function Post({ post }) {
  const [isDropdownMenu, setIsDropdownMenu] = useState(false);
  const { setIsDetailPost, setPostId } = useContext(MyContext);
  const dispatch = useDispatch();
  const userNow = useSelector((state) => state.persistedReducer.slice.userNow);

  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsDropdownMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const handleLike = () => {
    dispatch(ACTION_LIKE_POST(post._id));
  };

  return (
    <div
      className={`${styles.post} position-relative container-fluid p-3 mb-3`}
    >
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-between align-items-center">
          <Link to={`/profile/${post.creator?.userId}`}>
            <Image
              cloudName={process.env.REACT_APP_CLOUD_NAME}
              publicId={post.creator.userAvatar}
              className={`${styles.userAvatar} me-3`}
            />
          </Link>
          <div>
            <Link to={`/profile/${post.creator?.userId}`}>
              <div className={`${styles.userName}`}>
                {post.creator.userName}
              </div>
            </Link>
            <div className={`${styles.createTime}`}>
              1 min ago <LockIcon className={`${styles.icon}`} />
            </div>
          </div>
        </div>
        <div ref={menuRef} className={`${styles.option}`}>
          <div
            onClick={() => {
              setIsDropdownMenu(!isDropdownMenu);
            }}
            className={`${styles.wrapperIcon} d-flex justify-content-center align-items-center`}
          >
            <MoreHorizIcon className={`${styles.icon}`} />
          </div>
          {isDropdownMenu && (
            <DropdownMenu post={post} setIsDropdownMenu={setIsDropdownMenu} />
          )}
        </div>
      </div>
      {post.description !== "" && (
        <div className={`${styles.title} mt-3`}>{post.description}</div>
      )}
      {post.picturePath !== "" && (
        <Image
          cloudName={process.env.REACT_APP_CLOUD_NAME}
          publicId={post.picturePath}
          onClick={() => {
            setPostId(post._id);
            setIsDetailPost(true);
          }}
          className={`${styles.img} mt-3`}
        />
      )}
      <div
        className={`${styles.interact} mt-2 pt-1 d-flex justify-content-center align-items-center`}
      >
        <div
          onClick={() => handleLike()}
          className={`${styles.wrapperIcon} py-2 col d-flex justify-content-center align-items-center`}
        >
          {post?.likes?.includes(userNow._id) ? (
            <FavoriteIcon className={`${styles.iconHeart} me-2`} />
          ) : (
            <FavoriteBorderOutlinedIcon
              className={`${styles.iconOutlineHeart} me-2`}
            />
          )}
          <div className={`${styles.nameInteract}`}>
            {post?.likes.length !== 0 && post?.likes.length} Likes
          </div>
        </div>
        <div
          onClick={() => {
            setPostId(post._id);
            setIsDetailPost(true);
          }}
          className={`${styles.wrapperIcon} py-2 col d-flex justify-content-center align-items-center`}
        >
          <TextsmsOutlinedIcon className={`${styles.icon} me-2`} />
          <div className={`${styles.nameInteract}`}>
            {post?.comments.length !== 0 && post?.comments.length} Comments
          </div>
        </div>
        <div
          className={`${styles.wrapperIcon} py-2 col d-flex justify-content-center align-items-center`}
        >
          <ShareOutlinedIcon className={`${styles.icon} me-2`} />
          <div className={`${styles.nameInteract}`}>Share</div>
        </div>
      </div>
    </div>
  );
}
