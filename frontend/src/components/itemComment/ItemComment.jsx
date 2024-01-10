import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useSelector } from "react-redux";

import styles from "./itemComment.module.scss";
import DropdownCommentMenu from "../dropdownCommentMenu/DropdownCommentMenu";

export default function ItemComment({ comment }) {
  const [isDropdownCommentMenu, setIsDropdownCommentMenu] = useState(false);

  return (
    <div className={`${styles.itemComment} mt-3 d-flex`} key={comment.userId}>
      <img
        className={`${styles.avatarUser} me-3`}
        src="https://media.licdn.com/dms/image/D4E0BAQG-i2j7Q2WFIA/company-logo_200_200/0/1694593112031/img_logo?e=2147483647&v=beta&t=o1304VK0Zbh3CBA-8_LNYNZZCNrQjMIBS-nwKrAMzbY"
        alt=""
      />

      <div className="col">
        <div className="col-12 d-flex align-items-center">
          <div className={`${styles.wrapperUserComment} me-1 p-2`}>
            <div className={`${styles.userName}`}>{comment.userName}</div>
            <div className={`${styles.userComment}`}>{comment.userComment}</div>
          </div>
          <div className={`${styles.option} position-relative`}>
            <div
              onClick={() => {
                setIsDropdownCommentMenu(!isDropdownCommentMenu);
              }}
              className={`${styles.wrapperIcon} d-flex justify-content-center align-items-center`}
            >
              <MoreHorizIcon className={`${styles.icon}`} />
            </div>

            {isDropdownCommentMenu && (
              <>
                <div
                  onClick={() => {
                    setIsDropdownCommentMenu(false);
                  }}
                  className={`${styles.overlay} position-fixed`}
                ></div>
                <DropdownCommentMenu
                  setIsDropdownCommentMenu={setIsDropdownCommentMenu}
                />
              </>
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
