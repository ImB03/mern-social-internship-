import React, { useContext, useEffect, useState } from "react";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import NotificationsOffOutlinedIcon from "@mui/icons-material/NotificationsOffOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import CancelPresentationOutlinedIcon from "@mui/icons-material/CancelPresentationOutlined";
import WebAssetOffOutlinedIcon from "@mui/icons-material/WebAssetOffOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import NoAccountsOutlinedIcon from "@mui/icons-material/NoAccountsOutlined";

import styles from "./dropdownCommentMenu.module.scss";
import ModalPost from "../modalPost/ModalPost";
import { MyContext } from "../../hook/context/state";
import { useDispatch, useSelector } from "react-redux";

export default function DropdownCommentMenu({ setIsDropdownCommentMenu }) {
  const userNow = useSelector((state) => state.persistedReducer.slice.userNow);
  // const post = useSelector((state) => state.persistedReducer.post.post);

  const { setIsUpdatePost, setIsDeletePost } = useContext(MyContext);
  const dispatch = useDispatch();

  return (
    <div className={`${styles.dropdownMenu} position-absolute`}>
      <div className="container-fluid p-2">
        <div className={`${styles.wrapper}`}>
          <div
            onClick={() => {
              setIsDropdownCommentMenu(false);
            }}
            className={`${styles.item} p-2 d-flex justify-content-start align-items-center`}
          >
            <div
              className={`${styles.wrapperIcon} me-3 d-flex justify-content-center align-items-center`}
            >
              <BookmarkBorderOutlinedIcon className={`${styles.icon}`} />
            </div>
            <div className={`${styles.name}`}>Save post</div>
          </div>

          <div
            onClick={() => {
              setIsDropdownCommentMenu(false);
            }}
            className={`${styles.item} p-2 d-flex justify-content-start align-items-center`}
          >
            <div
              className={`${styles.wrapperIcon} me-3 d-flex justify-content-center align-items-center`}
            >
              <CancelPresentationOutlinedIcon className={`${styles.icon}`} />
            </div>
            <div className={`${styles.name}`}>Hidden posts</div>
          </div>
        
          <div
            onClick={() => {
              setIsDropdownCommentMenu(false);
            }}
            className={`${styles.item} p-2 d-flex justify-content-start align-items-center`}
          >
            <div
              className={`${styles.wrapperIcon} me-3 d-flex justify-content-center align-items-center`}
            >
              <FeedbackOutlinedIcon className={`${styles.icon}`} />
            </div>
            <div className={`${styles.name}`}>Report article</div>
          </div>
   
          <div
            onClick={() => {
              // handleGetPost(post._id);
              setIsDropdownCommentMenu(false);
              setIsDeletePost(true);
            }}
            className={`${styles.item} p-2 d-flex justify-content-start align-items-center`}
          >
            <div
              className={`${styles.wrapperIcon} me-3 d-flex justify-content-center align-items-center`}
            >
              <DeleteOutlineOutlinedIcon className={`${styles.icon}`} />
            </div>
            <div className={`${styles.name}`}>Delete post</div>
          </div>
        </div>
      </div>
    </div>
  );
}
