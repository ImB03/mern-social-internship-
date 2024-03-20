import React, { useEffect, useState, useContext, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClearIcon from "@mui/icons-material/Clear";
import PhotoLibraryOutlinedIcon from "@mui/icons-material/PhotoLibraryOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import LockIcon from "@mui/icons-material/Lock";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendIcon from "@mui/icons-material/Send";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import styles from "./modalPost.module.scss";
import DropzoneFile from "../dropzoneFile/DropzoneFile";
import {
  ACTION_COMMENT_POST,
  ACTION_CREATE_POST,
  ACTION_DELETE_POST,
  ACTION_LIKE_POST,
  ACTION_UPDATE_POST,
} from "../../reducers/slice/postSlice";
import { MyContext } from "../../hook/context/state";
import DropdownMenu from "../dropdownMenu/DropdownMenu";
import DropdownCommentMenu from "../dropdownCommentMenu/DropdownCommentMenu";
import ItemComment from "../itemComment/ItemComment";

export default function ModalPost() {
  const {
    isCreatePost,
    setIsCreatePost,
    setIsUpdatePost,
    isUpdatePost,
    isDeletePost,
    setIsDeletePost,
    isDetailPost,
    setIsDetailPost,
    postId,
  } = useContext(MyContext);
  const userNow = useSelector((state) => state.persistedReducer.slice.userNow);
  const posts = useSelector((state) => state.persistedReducer.slice.posts);

  const inputCommentRef = useRef(null);

  const dispatch = useDispatch();
  const [inputFiles, setInputFiles] = useState("");
  const [processedPost, setProcessedPost] = useState({});
  const [inputDescription, setInputDescription] = useState("");
  const [inputComment, setInputComment] = useState("");
  const [dataPost, setDataPost] = useState({
    description: "",
    picturePath: "",
  });

  console.log(posts.find((post) => post._id === postId));

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("description", dataPost.description);
    formData.append("picturePath", dataPost.picturePath);

    if (isCreatePost) {
      if (dataPost.description !== "" || dataPost.picturePath !== "") {
        dispatch(ACTION_CREATE_POST(formData));
        setIsCreatePost(false);
      }
    } else if (isUpdatePost) {
      if (dataPost.description !== "" || dataPost.picturePath !== "") {
        dispatch(
          ACTION_UPDATE_POST({
            postId,
            formData,
          })
        );
        setIsUpdatePost(false);
      }
    } else if (isDeletePost) {
      dispatch(ACTION_DELETE_POST(postId));
      setIsDeletePost(false);
    }
  };

  const handleComment = () => {
    if (inputComment !== "") {
      dispatch(
        ACTION_COMMENT_POST({
          dataComment: inputComment,
          postId,
        })
      );
    }
    setInputComment("");
  };

  const handleLike = () => {
    dispatch(ACTION_LIKE_POST(postId));
  };

  const handleCommentButtonClick = () => {
    // Focus vào input khi nút bình luận được nhấn
    inputCommentRef.current.focus();
  };

  useEffect(() => {
    setProcessedPost(posts.find((post) => post._id === postId));
  }, [postId, posts]);

  useEffect(() => {
    setDataPost({
      ...dataPost,
      description: inputDescription,
      picturePath: inputFiles,
    });
  }, [inputDescription, inputFiles]);

  useEffect(() => {
    if (isUpdatePost) {
      setInputDescription(processedPost.description);
      setInputFiles(processedPost.picturePath);
    }
  }, [processedPost, isUpdatePost]);

  useEffect(() => {
    if (isDetailPost) {
      inputCommentRef.current.focus();
    }
  }, [isDetailPost]);

  return (
    <div
      className={`${styles.modalPost} position-fixed d-flex justify-content-center align-items-center`}
    >
      <div
        onClick={() => {
          setIsUpdatePost(false);
          setIsCreatePost(false);
          setIsDeletePost(false);
          setIsDetailPost(false);
        }}
        className={`${styles.overlay} position-fixed`}
      ></div>

      {isDeletePost && (
        <div
          className={`${styles.wrapperModal} container p-3 col-10 col-xxl-5 position-absolute`}
        >
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
            className={`${styles.remindCaption} col-12 mt-3 d-flex justify-content-start`}
          >
            Are you sure you want to delete the post? There will be no recovery!
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
      )}
      {(isCreatePost || isUpdatePost) && (
        <div
          className={`${styles.wrapperModal} container p-3 col-12 col-sm-9 col-lg-6 col-xxl-4 position-absolute`}
        >
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
          <div className={`${styles.overFlow}`}>
            <div
              className={`${styles.user} pt-3 pb-2 d-flex align-items-center`}
            >
              <img
                className={`${styles.userAvatar} me-2`}
                src={`https://mern-social-internship.onrender.com/assets/${
                  userNow.userAvatar !== ""
                    ? userNow.userAvatar
                    : "defaultUserAvatar.png"
                }`}
                alt=""
              />
              <div>
                <div className={`${styles.userName}`}>{userNow.userName}</div>
                <div
                  className={`${styles.statePost} justify-content-between d-flex align-items-center`}
                >
                  <div
                    className={`${styles.wrapperChooseStateType} p-2 d-flex justify-content-between align-items-center`}
                  >
                    <LockIcon className={`${styles.icon} me-1`} /> Only me
                    <ArrowDropDownOutlinedIcon
                      className={`${styles.icon} ms-1`}
                    />
                  </div>
                </div>
              </div>
            </div>
            <textarea
              onChange={(e) => {
                setInputDescription(e.target.value);
              }}
              rows="2"
              cols="50"
              className={`${styles.inputText}`}
              placeholder={`${userNow.userName}, what in your mind?`}
              value={inputDescription}
            />
            <div className={`${styles.inputFile} mt-3 p-2`}>
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
          </div>
          <button
            onClick={() => handleSubmit()}
            className={`${styles.submitBtn} ${
              dataPost.description === "" && dataPost.picturePath === ""
                ? styles.disabledSubmitBtn
                : null
            } col-12 mt-3 p-2`}
          >
            {isUpdatePost ? "Save" : "Post"}
          </button>
        </div>
      )}
      {isDetailPost && (
        <div
          className={`${styles.wrapperModal} container p-3 col-12 col-md-9 col-xxl-6 position-absolute`}
        >
          <div
            className={`${styles.head} pb-3 position-relative d-flex justify-content-center align-items-center`}
          >
            <div className={`${styles.title}`}>
              Article by {processedPost?.creator?.userName}
            </div>
            <div
              onClick={() => {
                setIsUpdatePost(false);
                setIsCreatePost(false);
                setIsDeletePost(false);
                setIsDetailPost(false);
              }}
              className={`${styles.closeModal} position-absolute d-flex justify-content-center align-items-center`}
            >
              <ClearIcon />
            </div>
          </div>
          <div className={`${styles.overflowY}`}>
            <div
              className={`${styles.user} pt-3 pb-2 d-flex align-items-center`}
            >
              <img
                className={`${styles.userAvatar} me-2`}
                src={`https://mern-social-internship.onrender.com/assets/${
                  processedPost?.creator?.userAvatar !== ""
                    ? processedPost?.creator?.userAvatar
                    : "defaultUserAvatar.png"
                }`}
                alt=""
              />
              <div>
                <div className={`${styles.userName}`}>
                  {processedPost.creator?.userName}
                </div>
                <div
                  className={`${styles.statePost} d-flex align-items-center`}
                >
                  <div className={`${styles.timePost} me-1`}>1 min ago</div>

                  <LockIcon className={`${styles.icon}`} />
                </div>
              </div>
            </div>
            <div className={`${styles.descriptionPost}`}>
              {processedPost.description}
            </div>
            <div className={`${styles.picturePost} mt-3`}>
              {processedPost.picturePath !== "" && (
                <img
                  className={`${styles.picturePath}`}
                  src={`https://mern-social-internship.onrender.com/assets/${processedPost.picturePath}`}
                  alt=""
                />
              )}
            </div>
            <div
              className={`${styles.interact} mt-2 py-1 d-flex justify-content-center align-items-center`}
            >
              <div
                onClick={() => handleLike()}
                className={`${styles.wrapperIcon} py-2 col d-flex justify-content-center align-items-center`}
              >
                {processedPost?.likes?.includes(userNow._id) ? (
                  <FavoriteIcon className={`${styles.iconHeart} me-2`} />
                ) : (
                  <FavoriteBorderOutlinedIcon
                    className={`${styles.iconOutlineHeart} me-2`}
                  />
                )}
                <div className={`${styles.nameInteract}`}>
                  {processedPost.likes?.length !== 0 &&
                    processedPost.likes?.length}{" "}
                  Likes
                </div>
              </div>
              <div
                onClick={handleCommentButtonClick}
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

            <div className={`${styles.commentPart}`}>
              {processedPost?.comments?.map((comment) => (
                <ItemComment comment={comment} />
              ))}
            </div>
          </div>
          <div className={`${styles.foot} col-12 mt-2 d-flex`}>
            <img
              className={`${styles.userAvatar} me-3`}
              src={`https://mern-social-internship.onrender.com/assets/${
                userNow.userAvatar !== ""
                  ? userNow.userAvatar
                  : "defaultUserAvatar.png"
              }`}
              alt=""
            />
            <div className={`${styles.wrapperComment} p-2 col`}>
              <div className="d-flex justify-content-between align-item-center">
                <textarea
                  onChange={(e) => setInputComment(e.target.value)}
                  ref={inputCommentRef}
                  className={`${styles.inputComment} col me-2`}
                  rows={1}
                  placeholder="Comment..."
                  value={inputComment}
                />
                <div
                  onClick={() => {
                    handleComment();
                  }}
                  className={`${styles.wrapperIcon} ${
                    inputComment === "" && styles.disabledCommentBtn
                  }  d-flex justify-content-center align-items-center`}
                >
                  <SendIcon className={`${styles.icon}`} />
                </div>
              </div>
              <div className="d-flex">
                <div
                  className={`${styles.wrapperIcon} me-1 d-flex justify-content-center align-items-center`}
                >
                  <EmojiEmotionsOutlinedIcon className={`${styles.icon}`} />
                </div>
                <div
                  className={`${styles.wrapperIcon} me-1 d-flex justify-content-center align-items-center`}
                >
                  <CameraAltOutlinedIcon className={`${styles.icon}`} />
                </div>
                <div
                  className={`${styles.wrapperIcon} me-1 d-flex justify-content-center align-items-center`}
                >
                  <GifBoxOutlinedIcon className={`${styles.icon}`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
