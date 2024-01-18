import React, { useEffect, useState, useContext } from "react";
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

import styles from "./modalUser.module.scss";
import DropzoneFile from "../dropzoneFile/DropzoneFile";

import { MyContext } from "../../hook/context/postState";

export default function ModalUser() {
  const { setIsCreatePost, setIsUpdatePost, isUpdatePost, setIsUpdateUser } =
    useContext(MyContext);
  const user = useSelector((state) => state.persistedReducer.auth.user);
  const post = useSelector((state) => state.post.post);

  const [inputFiles, setInputFiles] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [dataPost, setDataPost] = useState({
    description: "",
    picturePath: "",
  });

  const handleSubmit = () => {};

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

  return (
    <div
      className={`${styles.modalUser} position-fixed d-flex justify-content-center align-items-center`}
    >
      <div
        onClick={() => {
          setIsUpdateUser(false);
        }}
        className={`${styles.overlay} position-fixed`}
      ></div>
      <div className={`${styles.wrapperModal} col-6 position-absolute`}>
        <div className="container-fluid p-3">
          <div
            className={`${styles.head} pb-3 position-relative d-flex justify-content-center align-items-center`}
          >
            <div className={`${styles.title}`}>Edit profile</div>
            <div
              onClick={() => {
                setIsUpdateUser(false);
              }}
              className={`${styles.closeModal} position-absolute d-flex justify-content-center align-items-center`}
            >
              <ClearIcon />
            </div>
          </div>
          <div className={`${styles.avatarUser}`}>
            <div className={`${styles.namePart}`}>Avatar</div>
            <div className="d-flex justify-content-center">2</div>
          </div>
          <div className={`${styles.coverAvatar}`}>
            <div className={`${styles.namePart}`}>Cover avatar</div>
            <div className="d-flex justify-content-center">2</div>
          </div>
          <div className={`${styles.editIntroduction}`}>
            <div className={`${styles.namePart}`}>Edit introduction</div>
            <div className="d-flex justify-content-center">2</div>
          </div>
          <button
            onClick={() => handleSubmit()}
            className={`${styles.submitBtn} col-12 mt-3 p-2`}
          >
            Edit introduction information
          </button>
        </div>
      </div>
    </div>
  );
}
