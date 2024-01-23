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

import styles from "./modalUser.module.scss";
import DropzoneFile from "../dropzoneFile/DropzoneFile";

import { MyContext } from "../../hook/context/postState";
import InputUpdateUser from "../inputUpdateUser/InputUpdateUser";

export default function ModalUser() {
  const { setIsUpdateUser } = useContext(MyContext);
  const user = useSelector((state) => state.persistedReducer.auth.user);

  const [displayInputProvinceCity, setDisplayInputProvinceCity] =
    useState(false);
  const [displayInputWorkplace, setDisplayInputWorkplace] = useState(false);
  const [displayInputSchool, setDisplayInputSchool] = useState(false);
  const [displayInputHomeTown, setDisplayInputHomeTown] = useState(false);
  const [displayInputNickname, setDisplayInputNickname] = useState(false);

  const [dataInputProvinceCity, setDataInputProvinceCity] = useState("");
  const [dataInputWorkplace, setDataInputWorkplace] = useState("");
  const [dataInputSchool, setDatayInputSchool] = useState("");
  const [dataInputHomeTown, setDatayInputHomeTown] = useState("");
  const [dataInputNickname, setDataInputNickname] = useState("");

  console.log(displayInputWorkplace);

  const inputRef = useRef(null);

  const handleFocusInput = () => {
    if (
      (displayInputProvinceCity || displayInputWorkplace) &&
      inputRef.current
    ) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    if (
      (displayInputProvinceCity || displayInputWorkplace) &&
      inputRef.current
    ) {
      inputRef.current.focus();
    }
  }, [displayInputProvinceCity, displayInputWorkplace]);

  const handleSubmit = () => {};

  return (
    <div
      onClick={() => {
        if (dataInputProvinceCity === "") {
          setDisplayInputProvinceCity(false);
        }
        if (dataInputWorkplace === "") {
          setDisplayInputWorkplace(false);
        }
        setDisplayInputSchool(false);
        setDisplayInputHomeTown(false);
        setDisplayInputNickname(false);
      }}
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
          <div className={`${styles.overflowY}`}>
            <div className={`${styles.avatarUser} mt-3`}>
              <div className={`${styles.namePart}`}>Avatar</div>
              <div
                className={`${styles.inputAvatar} mt-3 d-flex justify-content-center`}
              >
                <div
                  className={`${styles.borderInputFile} border p-2 d-flex justify-content-center align-items-center`}
                >
                  <div
                    className={`${styles.wrapperInputFile} d-flex justify-content-center align-items-center`}
                  >
                    <DropzoneFile />
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.coverAvatar} mt-3`}>
              <div className={`${styles.namePart}`}>Cover avatar</div>
              <div
                className={`${styles.inputAvatar} mt-3 d-flex justify-content-center`}
              >
                <div
                  className={`${styles.borderInputFile} col-9 border p-2 d-flex justify-content-center align-items-center`}
                >
                  <div
                    className={`${styles.wrapperInputFile} col-12 d-flex justify-content-center align-items-center`}
                  >
                    <DropzoneFile />
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.editIntroduction} mt-3`}>
              <div className={`${styles.namePart}`}>Edit introduction</div>
              <div className={`${styles.inputInfo} mt-3`}>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFocusInput();
                    setDisplayInputProvinceCity(true);
                  }}
                  className={`${styles.itemInput} ${
                    displayInputProvinceCity && "border-bottom"
                  } ps-3 mb-3 d-flex flex-column justify-content-center`}
                >
                  <div
                    className={`${styles.label} ${
                      !displayInputProvinceCity && "fs-6"
                    } ${
                      displayInputProvinceCity && "mt-2"
                    } d-flex align-items-center`}
                  >
                    <HomeOutlinedIcon
                      className={`${styles.icon} ${
                        !displayInputProvinceCity && "fs-4"
                      } me-1`}
                    />
                    Current Province/City at
                  </div>
                  {displayInputProvinceCity && (
                    <input
                      ref={inputRef}
                      onChange={(e) => {
                        setDataInputProvinceCity(e.target.value);
                      }}
                      className={`${styles.input} mb-2`}
                      type="text"
                      name=""
                    />
                  )}
                </div>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFocusInput();
                    setDisplayInputWorkplace(true);
                  }}
                  className={`${styles.itemInput} ${
                    displayInputWorkplace && "border-bottom"
                  } ps-3 mb-3 d-flex flex-column justify-content-center`}
                >
                  <div
                    className={`${styles.label} ${
                      !displayInputWorkplace && "fs-6"
                    } ${
                      displayInputWorkplace && "mt-2"
                    } d-flex align-items-center`}
                  >
                    <HomeOutlinedIcon
                      className={`${styles.icon} ${
                        !displayInputWorkplace && "fs-4"
                      } me-1`}
                    />
                    Workplace
                  </div>
                  {displayInputWorkplace && (
                    <input
                      ref={inputRef}
                      onChange={(e) => {
                        setDataInputWorkplace(e.target.value);
                      }}
                      className={`${styles.input} mb-2`}
                      type="text"
                      name=""
                    />
                  )}
                </div>
                {/* <div>Workplace</div>
                <div>School</div>
                <div>Home town</div>
                <div>Nickname</div> */}
              </div>
            </div>
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
