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

import { MyContext } from "../../hook/context/state";
import DropzoneAvatarUser from "../dropzoneAvatarUser/DropzoneAvatarUser";
import DropzoneCoverAvatar from "../dropzoneCoverAvatar/DropzoneCoverAvatar";
import { Link, useNavigate } from "react-router-dom";
import { ACTION_SEARCH } from "../../reducers/slice/searchSlice";

export default function ModalSearch() {
  const users = useSelector((state) => state.persistedReducer.slice.users);

  const { isSearch, setIsSearch } = useContext(MyContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [processedUsers, setProcessedUsers] = useState([]);

  const inputRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFocusInput = (e) => {
    if (isSearch && inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleKeyPress = (e) => {
    // Kiểm tra xem biến sự kiện (e) có tồn tại không
    if (e) {
      // Kiểm tra xem keyCode có tồn tại không
      const keyCode = e.keyCode || e.which;

      // Tiếp tục xử lý chỉ khi keyCode tồn tại
      if (keyCode === 13) {
        // Ngăn chặn hành động mặc định của phím Enter
        e.preventDefault();

        navigate(`/search/searchall?q=${searchTerm}`);
        setIsSearch(false);
      }
    }
  };

  useEffect(() => {
    if (isSearch && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearch]);

  useEffect(() => {
    setProcessedUsers(users);
  }, [users]);

  useEffect(() => {
    setProcessedUsers([]);
    const delayDebounce = setTimeout(() => {
      if (searchTerm !== "") {
        dispatch(ACTION_SEARCH(searchTerm));
      }
    }, 700);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm, dispatch]);

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
      <div
        onClick={handleFocusInput}
        className={`${styles.wrapperModal} col-5 position-absolute`}
      >
        <div className="container-fluid p-3">
          <div className={`${styles.search} pb-1 border-bottom d-flex`}>
            <button
              className={`${styles.searchBtn} d-flex justify-content-center align-items-center`}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <i className={`${styles.icon} fa-solid fa-magnifying-glass`}></i>
            </button>
            <input
              ref={inputRef}
              className={`${styles.searchInput} ps-2`}
              type="search"
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyPress}
            />
          </div>
          {searchTerm && (
            <div className={`${styles.suggest} mt-2`}>
              {processedUsers.length !== 0 &&
                processedUsers.slice(0, 5)?.map((user) => (
                  <Link
                    to={`/profile/${user._id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsSearch(false);
                    }}
                    className={`${styles.itemSuggest} p-2 d-flex align-items-center`}
                  >
                    <img
                      className={`${styles.avatarUser} me-3`}
                      src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp"
                      alt=""
                    />
                    <div className={`${styles.searchTerm}`}>
                      {user?.userName}
                    </div>
                  </Link>
                ))}
              <Link
                to={`/search/searchall?q=${searchTerm}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsSearch(false);
                }}
                className={`${styles.itemSuggest} p-2 d-flex align-items-center`}
              >
                <div
                  className={`${styles.wrapperIcon} me-3 d-flex align-items-center justify-content-center`}
                >
                  <i
                    className={`${styles.icon} fa-solid fa-magnifying-glass`}
                  ></i>
                </div>
                <div className={`${styles.searchTerm}`}>{searchTerm}</div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
