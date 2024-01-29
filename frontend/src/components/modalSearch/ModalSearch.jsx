import React, { useRef, useState, useContext, useEffect } from "react";
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
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";

import styles from "./modalSearch.module.scss";
import DropzoneFile from "../dropzoneFile/DropzoneFile";

import { MyContext } from "../../hook/context/postState";
import DropzoneAvatarUser from "../dropzoneAvatarUser/DropzoneAvatarUser";
import DropzoneCoverAvatar from "../dropzoneCoverAvatar/DropzoneCoverAvatar";
import { ACTION_UPDATE_USER } from "../../reducers/slice/userSlice";

export default function ModalSearch() {
  const { isSearch, setIsSearch } = useContext(MyContext);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.persistedReducer.auth.user);

  const handleSubmit = () => {};

  return (
    <div
      className={`${styles.modalSearch} position-fixed d-flex justify-content-center align-items-start`}
    >
      <div className={`${styles.overlay} position-fixed`}>
        <div
          onClick={() => {
            setIsSearch(false);
          }}
          className={`${styles.closeIcon} position-absolute d-flex justify-content-center align-items-center`}
        >
          <ClearIcon className={`${styles.icon}`} />
        </div>
      </div>
      <div className={`${styles.wrapperModal} col-6 position-absolute`}>
        <div className="container-fluid p-3">
          <div className={`${styles.search} border-bottom d-flex`}>
            <button
              className={`${styles.searchBtn} d-flex justify-content-center align-items-center`}
              onClick={() => {}}
            >
              <i className={`${styles.icon} fa-solid fa-magnifying-glass`}></i>
            </button>
            <input
              className={`${styles.searchInput} ps-2`}
              type="search"
              name=""
              id=""
            />
          </div>
          <div className={`${styles.suggest}`}>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
          </div>
        </div>
      </div>
    </div>
  );
}
