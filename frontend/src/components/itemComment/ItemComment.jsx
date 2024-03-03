import React, { useState, useRef, useEffect } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import styles from "./itemComment.module.scss";
import DropdownCommentMenu from "../dropdownCommentMenu/DropdownCommentMenu";

export default function ItemComment({ comment }) {
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
      <img
        className={`${styles.userAvatar} me-3`}
        src={`http://localhost:19000/assets/${
          comment.userAvatar !== ""
            ? comment.userAvatar
            : "defaultUserAvatar.png"
        }`}
        alt=""
      />

      <div className="col">
        <div className="col-12 d-flex align-items-center">
          <div className={`${styles.wrapperUserComment} me-1 p-2`}>
            <div className={`${styles.userName}`}>{comment.userName}</div>
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

            {/* {isDropdownCommentMenu && (
              <DropdownCommentMenu
                setIsDropdownCommentMenu={setIsDropdownCommentMenu}
              />
            )} */}
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
