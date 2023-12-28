import React, { useContext } from "react";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import styles from "./dropdownMenu.module.scss";
import ModalPost from "../modalPost/ModalPost";
import { MyContext } from "../../hook/context/postState";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_GET_POST } from "../../reducers/slice/postSlice";

export default function DropdownMenu({ setIsDropdownMenu, postId }) {
  const { setIsUpdatePost, isUpdatePost, isCreatePost } = useContext(MyContext);
  const dispatch = useDispatch();

  const handleGetPost = (postId) => {
    dispatch(ACTION_GET_POST(postId));
  };

  return (
    <div className={`${styles.dropdownMenu} position-absolute`}>
      {(isUpdatePost || isCreatePost) && <ModalPost />}
      <div className="container-fluid p-2">
        <div className={`${styles.wrapper}`}>
          <div
            onClick={() => {
              handleGetPost(postId);
              setIsDropdownMenu(false);
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
          <div
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