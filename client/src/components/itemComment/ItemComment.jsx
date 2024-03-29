import React, { useState, useRef, useEffect, useContext } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import styles from "./itemComment.module.scss";
import DropdownCommentMenu from "../dropdownCommentMenu/DropdownCommentMenu";
import { Link } from "react-router-dom";
import { MyContext } from "../../hook/context/state";
import { Image } from "cloudinary-react";

export default function ItemComment({ comment }) {
  const { setIsDetailPost } = useContext(MyContext);
  const [isDropdownCommentMenu, setIsDropdownCommentMenu] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsDropdownCommentMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className={`${styles.itemComment} mt-3 d-flex`} key={comment.userId}>
      <Link
        onClick={() => {
          setIsDetailPost(false);
        }}
        to={`/profile/${comment.userId}`}
      >
        <Image
          cloudName={process.env.REACT_APP_CLOUD_NAME}
          publicId={comment.userAvatar}
          className={`${styles.userAvatar} me-3`}
        />
      </Link>

      <div className="col">
        <div className="col-12 d-flex align-items-center">
          <div className={`${styles.wrapperUserComment} me-1 p-2`}>
            <Link
              onClick={() => {
                setIsDetailPost(false);
              }}
              to={`/profile/${comment.userId}`}
            >
              <div className={`${styles.userName}`}>{comment.userName}</div>
            </Link>
            <div className={`${styles.userComment}`}>{comment.userComment}</div>
          </div>
          <div className={`${styles.option} position-relative`} ref={menuRef}>
            <div
              onClick={() => {
                setIsDropdownCommentMenu(!isDropdownCommentMenu);
              }}
              className={`${styles.wrapperIcon} d-flex justify-content-center align-items-center`}
            >
              <MoreHorizIcon className={`${styles.icon}`} />
            </div>

            {isDropdownCommentMenu && (
              <DropdownCommentMenu
                setIsDropdownCommentMenu={setIsDropdownCommentMenu}
              />
            )}
          </div>
        </div>
        <div className="px-2 col-12 d-flex">
          <div className={`${styles.commentAt} me-3`}>1 day</div>
          <div className={`${styles.like} me-3`}>Like</div>
          <div className={`${styles.feedback} me-3`}>Feedback</div>
        </div>
      </div>
    </div>
  );
}
