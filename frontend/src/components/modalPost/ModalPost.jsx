import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClearIcon from "@mui/icons-material/Clear";
import PhotoLibraryOutlinedIcon from "@mui/icons-material/PhotoLibraryOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

import styles from "./modalPost.module.scss";
import DropzoneFile from "../dropzoneFile/DropzoneFile";
import {
  ACTION_CREATE_POST,
  ACTION_DELETE_POST,
  ACTION_GET_ALL_POSTS,
  ACTION_UPDATE_POST,
} from "../../reducers/slice/postSlice";
import { MyContext } from "../../hook/context/postState";

export default function ModalPost() {
  const {
    isCreatePost,
    setIsCreatePost,
    setIsUpdatePost,
    isUpdatePost,
    isDeletePost,
    setIsDeletePost,
  } = useContext(MyContext);
  const post = useSelector((state) => state.post.post);
  const user = useSelector((state) => state.auth.user);

  

  const dispatch = useDispatch();
  const [inputFiles, setInputFiles] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [dataPost, setDataPost] = useState({
    description: "",
    picturePath: "",
  });

  useEffect(() => {
    setDataPost({
      ...dataPost,
      description: inputDescription,
      picturePath: inputFiles,
    });
  }, [inputDescription, inputFiles]);

  useEffect(() => {
    setInputDescription(post.description);
    setInputFiles(post.picturePath);
  }, [post]);

  useEffect(() => {
    setInputDescription("");
    setInputFiles("");
  }, [setIsCreatePost, setIsUpdatePost]);

  const handleSubmit = () => {
    if (isCreatePost) {
      dispatch(
        ACTION_CREATE_POST({
          dataPost: { ...dataPost, userId: user._id },
          setIsCreatePost,
        })
      );
    } else if (isUpdatePost) {
      dispatch(
        ACTION_UPDATE_POST({
          postId: post._id,
          dataPost,
          setIsUpdatePost,
        })
      );
    } else if (isDeletePost) {
      dispatch(
        ACTION_DELETE_POST({
          postId: post._id,
          setIsDeletePost,
        })
      );
    }
  };

  return (
    <div
      className={`${styles.modalPost} position-fixed d-flex justify-content-center align-items-center`}
    >
      <div
        onClick={() => {
          setIsUpdatePost(false);
          setIsCreatePost(false);
          setIsDeletePost(false);
        }}
        className={`${styles.overlay} position-fixed`}
      ></div>

      {isDeletePost ? (
        <div className={`${styles.wrapperModal} position-absolute`}>
          <div className="container-fluid p-3">
            <div
              className={`${styles.head} pb-3 position-relative d-flex justify-content-center align-items-center`}
            >
              <div className={`${styles.title}`}>Delete post?</div>
              <div
                onClick={() => {
                  setIsUpdatePost(false);
                  setIsCreatePost(false);
                  setIsDeletePost(false);
                }}
                className={`${styles.closeModal} position-absolute d-flex justify-content-center align-items-center`}
              >
                <ClearIcon />
              </div>
            </div>
            <div
              className={`${styles.remindCaption} col-12 mt-3 d-flex justify-content-end`}
            >
              Are you sure you want to delete the post? There will be no
              recovery!
            </div>
            <div
              className={`${styles.wrapperBtn} col-12 mt-3 d-flex justify-content-end`}
            >
              <button
                onClick={() => setIsDeletePost(false)}
                className={`${styles.cancelBtn} mt-3 me-2 p-2`}
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  handleSubmit();
                }}
                className={`${styles.deleteBtn} mt-3 p-2`}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className={`${styles.wrapperModal} position-absolute`}>
          <div className="container-fluid p-3">
            <div
              className={`${styles.head} pb-3 position-relative d-flex justify-content-center align-items-center`}
            >
              <div className={`${styles.title}`}>
                {isUpdatePost ? "Update Post" : "Create Post"}
              </div>
              <div
                onClick={() => {
                  setIsUpdatePost(false);
                  setIsCreatePost(false);
                  setIsDeletePost(false);
                }}
                className={`${styles.closeModal} position-absolute d-flex justify-content-center align-items-center`}
              >
                <ClearIcon />
              </div>
            </div>
            <div
              className={`${styles.user} pt-3 pb-2 d-flex align-items-center`}
            >
              <img
                className={`${styles.useImg} me-2`}
                src="data:image/jpeg;base64,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"
                alt=""
              />
              <div className={`${styles.userName}`}>Trần Gia Bảo</div>
            </div>
            <textarea
              onChange={(e) => {
                setInputDescription(e.target.value);
              }}
              rows="2"
              cols="50"
              className={`${styles.inputText}`}
              placeholder="Username, what in your mind?"
              value={inputDescription}
            />
            <div className={`${styles.inputFile} mt-3 p-3`}>
              <DropzoneFile
                setInputFiles={setInputFiles}
                inputFiles={inputFiles}
              />
            </div>
            <div
              className={`${styles.moreOption} p-3 mt-2 d-flex justify-content-center`}
            >
              <div
                className={`${styles.caption} col d-flex justify-content-start align-items-center`}
              >
                Add to your article
              </div>
              <div
                className={`${styles.option} col-7 d-flex justify-content-between align-items-center`}
              >
                <div
                  className={`${styles.wrapperIcon} d-flex justify-content-center align-items-center`}
                >
                  <PhotoLibraryOutlinedIcon className={`${styles.icon}`} />
                </div>
                <div
                  className={`${styles.wrapperIcon} d-flex justify-content-center align-items-center`}
                >
                  <LocalOfferOutlinedIcon className={`${styles.icon}`} />
                </div>
                <div
                  className={`${styles.wrapperIcon} d-flex justify-content-center align-items-center`}
                >
                  <InsertEmoticonOutlinedIcon className={`${styles.icon}`} />
                </div>
                <div
                  className={`${styles.wrapperIcon} d-flex justify-content-center align-items-center`}
                >
                  <LocationOnOutlinedIcon className={`${styles.icon}`} />
                </div>
                <div
                  className={`${styles.wrapperIcon} d-flex justify-content-center align-items-center`}
                >
                  <GifBoxOutlinedIcon className={`${styles.icon}`} />
                </div>
                <div
                  className={`${styles.wrapperIcon} d-flex justify-content-center align-items-center`}
                >
                  <MoreHorizOutlinedIcon className={`${styles.icon}`} />
                </div>
              </div>
            </div>
            <button
              onClick={() => handleSubmit()}
              className={`${styles.submitBtn} col-12 mt-3 p-2`}
            >
              {isUpdatePost ? "Save" : "Post"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
