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
import { ACTION_GET_POST } from "../../reducers/slice/postSlice";

export default function DropdownCommentMenu({ setIsDropdownCommentMenu }) {
  const user = useSelector((state) => state.persistedReducer.slice.userNow);
  const post = useSelector((state) => state.persistedReducer.post.post);

  const { setIsUpdatePost, handleGetPost, setIsDeletePost } =
    useContext(MyContext);
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
          {post.creator === user._id ? (
            <div
              onClick={() => {
                setIsDropdownCommentMenu(false);
              }}
              className={`${styles.item} p-2 d-flex justify-content-start align-items-center`}
            >
              <div
                className={`${styles.wrapperIcon} me-3 d-flex justify-content-center align-items-center`}
              >
                <NotificationsOffOutlinedIcon className={`${styles.icon}`} />
              </div>
              <div className={`${styles.name}`}>
                Turn off notifications for this post
              </div>
            </div>
          ) : (
            <div
              onClick={() => {
                setIsDropdownCommentMenu(false);
              }}
              className={`${styles.item} p-2 d-flex justify-content-start align-items-center`}
            >
              <div
                className={`${styles.wrapperIcon} me-3 d-flex justify-content-center align-items-center`}
              >
                <NotificationsActiveOutlinedIcon className={`${styles.icon}`} />
              </div>
              <div className={`${styles.name}`}>
                Turn on notifications for this post
              </div>
            </div>
          )}
          {post.creator === user._id && (
            <div
              onClick={() => {
                handleGetPost(post._id);
                setIsDropdownCommentMenu(false);
                setIsUpdatePost(true);
              }}
              className={`${styles.item} p-2 d-flex justify-content-start align-items-center`}
            >
              <div
                className={`${styles.wrapperIcon} me-3 d-flex justify-content-center align-items-center`}
              >
                <CreateOutlinedIcon className={`${styles.icon}`} />
              </div>
              <div className={`${styles.name}`}>Update post</div>
            </div>
          )}
          {post.creator !== user._id && (
            <>
              <div
                onClick={() => {
                  setIsDropdownCommentMenu(false);
                }}
                className={`${styles.item} p-2 d-flex justify-content-start align-items-center`}
              >
                <div
                  className={`${styles.wrapperIcon} me-3 d-flex justify-content-center align-items-center`}
                >
                  <CancelPresentationOutlinedIcon
                    className={`${styles.icon}`}
                  />
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
                  <WebAssetOffOutlinedIcon className={`${styles.icon}`} />
                </div>
                <div className={`${styles.name}`}>
                  Hidden all from {post.userName}
                </div>
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
                  setIsDropdownCommentMenu(false);
                }}
                className={`${styles.item} p-2 d-flex justify-content-start align-items-center`}
              >
                <div
                  className={`${styles.wrapperIcon} me-3 d-flex justify-content-center align-items-center`}
                >
                  <NoAccountsOutlinedIcon className={`${styles.icon}`} />
                </div>
                <div className={`${styles.name}`}>
                  Block {post.userName}'s personal page
                </div>
              </div>
            </>
          )}
          {post.creator === user._id && (
            <div
              onClick={() => {
                handleGetPost(post._id);
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
          )}
        </div>
      </div>
    </div>
  );
}
