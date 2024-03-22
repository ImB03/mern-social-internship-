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

import styles from "./modalMenu.module.scss";
import DropzoneFile from "../dropzoneFile/DropzoneFile";

import { MyContext } from "../../hook/context/state";
import { Link, useNavigate } from "react-router-dom";
import { ACTION_SEARCH } from "../../reducers/slice/searchSlice";
import Menu from "../menu/Menu";

export default function ModalMenu({ setIsOpenMenu }) {
  return (
    <div className={`${styles.modalMenu} d-xl-none position-fixed`}>
      <div
        onClick={() => {
          setIsOpenMenu(false);
        }}
        className={`${styles.overlay} position-fixed`}
      ></div>
      <div
        className={`${styles.wrapperModal} container-fluid col-12 col-sm-8 col-md-6 px-3 position-absolute`}
      >
        <Menu />
      </div>
    </div>
  );
}
