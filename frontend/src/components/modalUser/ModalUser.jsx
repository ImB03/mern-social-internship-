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

import styles from "./modalUser.module.scss";
import DropzoneFile from "../dropzoneFile/DropzoneFile";

import { MyContext } from "../../hook/context/state";
import DropzoneAvatarUser from "../dropzoneAvatarUser/DropzoneAvatarUser";
import DropzoneCoverAvatar from "../dropzoneCoverAvatar/DropzoneCoverAvatar";
import { ACTION_UPDATE_USER } from "../../reducers/slice/userSlice";

export default function ModalUser() {
  const { setIsUpdateUser } = useContext(MyContext);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.persistedReducer.auth.user);

  const [displayInputProvinceCity, setDisplayInputProvinceCity] =
    useState(false);
  const [displayInputWorkplace, setDisplayInputWorkplace] = useState(false);
  const [displayInputSchool, setDisplayInputSchool] = useState(false);
  const [displayInputHomeTown, setDisplayInputHomeTown] = useState(false);
  const [displayInputNickname, setDisplayInputNickname] = useState(false);

  const [dataInputProvinceCity, setDataInputProvinceCity] = useState("");
  const [dataInputWorkplace, setDataInputWorkplace] = useState("");
  const [dataInputSchool, setDataInputSchool] = useState("");
  const [dataInputHomeTown, setDataInputHomeTown] = useState("");
  const [dataInputNickname, setDataInputNickname] = useState("");
  const [dataInputAvatarUser, setDataInputAvatarUser] = useState("");
  const [dataInputCoverAvatar, setDataInputCoverAvatar] = useState("");

  const [dataUser, setDataUser] = useState({
    avatarUser: "",
    coverAvatar: "",
    provinceCity: "",
    workplace: "",
    school: "",
    homeTown: "",
    nickname: "",
  });

  const inputRefProvinceCity = useRef(null);
  const inputRefWorkplace = useRef(null);
  const inputRefSchool = useRef(null);
  const inputRefHomeTown = useRef(null);
  const inputRefNickname = useRef(null);

  const handleFocusInputProvinceCity = () => {
    if (displayInputProvinceCity && inputRefProvinceCity.current) {
      inputRefProvinceCity.current.focus();
    }
  };
  const handleFocusInputWorkplace = () => {
    if (displayInputWorkplace && inputRefWorkplace.current) {
      inputRefWorkplace.current.focus();
    }
  };
  const handleFocusInputSchool = () => {
    if (displayInputSchool && inputRefSchool.current) {
      inputRefSchool.current.focus();
    }
  };
  const handleFocusInputHomeTown = () => {
    if (displayInputHomeTown && inputRefHomeTown.current) {
      inputRefHomeTown.current.focus();
    }
  };
  const handleFocusInputNickname = () => {
    if (displayInputNickname && inputRefNickname.current) {
      inputRefNickname.current.focus();
    }
  };

  useEffect(() => {
    if (displayInputProvinceCity && inputRefProvinceCity.current) {
      inputRefProvinceCity.current.focus();
    }
  }, [displayInputProvinceCity]);
  useEffect(() => {
    if (displayInputWorkplace && inputRefWorkplace.current) {
      inputRefWorkplace.current.focus();
    }
  }, [displayInputWorkplace]);
  useEffect(() => {
    if (displayInputSchool && inputRefSchool.current) {
      inputRefSchool.current.focus();
    }
  }, [displayInputSchool]);
  useEffect(() => {
    if (displayInputHomeTown && inputRefHomeTown.current) {
      inputRefHomeTown.current.focus();
    }
  }, [displayInputHomeTown]);
  useEffect(() => {
    if (displayInputNickname && inputRefNickname.current) {
      inputRefNickname.current.focus();
    }
  }, [displayInputNickname]);

  useEffect(() => {
    setDataUser({
      ...dataUser,
      avatarUser: dataInputAvatarUser,
      coverAvatar: dataInputCoverAvatar,
      provinceCity: dataInputProvinceCity,
      workplace: dataInputWorkplace,
      school: dataInputSchool,
      homeTown: dataInputHomeTown,
      nickname: dataInputNickname,
    });
  }, [
    dataInputProvinceCity,
    dataInputWorkplace,
    dataInputSchool,
    dataInputHomeTown,
    dataInputNickname,
    dataInputAvatarUser,
    dataInputCoverAvatar,
  ]);

  const handleSubmit = () => {
    dispatch(ACTION_UPDATE_USER({ dataUser, setIsUpdateUser }));
  };

  return (
    <div
      onClick={() => {
        if (dataInputProvinceCity === "") {
          setDisplayInputProvinceCity(false);
        }
        if (dataInputWorkplace === "") {
          setDisplayInputWorkplace(false);
        }
        if (dataInputSchool === "") {
          setDisplayInputSchool(false);
        }
        if (dataInputHomeTown === "") {
          setDisplayInputHomeTown(false);
        }
        if (dataInputNickname === "") {
          setDisplayInputNickname(false);
        }
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
                  className={`${styles.borderInputFile} position-relative border p-2 d-flex justify-content-center align-items-center`}
                >
                  <div
                    className={`${styles.wrapperInputFile} d-flex justify-content-center align-items-center`}
                  >
                    <DropzoneAvatarUser
                      dataInputAvatarUser={dataInputAvatarUser}
                      setDataInputAvatarUser={setDataInputAvatarUser}
                    />
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
                    <DropzoneCoverAvatar
                      dataInputCoverAvatar={dataInputCoverAvatar}
                      setDataInputCoverAvatar={setDataInputCoverAvatar}
                    />
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
                    handleFocusInputProvinceCity();
                    setDisplayInputProvinceCity(true);
                    if (dataInputWorkplace === "") {
                      setDisplayInputWorkplace(false);
                    }
                    if (dataInputSchool === "") {
                      setDisplayInputSchool(false);
                    }
                    if (dataInputHomeTown === "") {
                      setDisplayInputHomeTown(false);
                    }
                    if (dataInputNickname === "") {
                      setDisplayInputNickname(false);
                    }
                  }}
                  className={`${styles.itemInput} ${
                    displayInputProvinceCity && "border-bottom"
                  } ${
                    !displayInputProvinceCity && "rounded-3"
                  } px-3 mb-2 d-flex flex-column justify-content-center`}
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
                        !displayInputProvinceCity && "fs-4 me-2"
                      } ${displayInputProvinceCity && "me-1"}`}
                    />
                    Current Province/City at
                  </div>
                  {displayInputProvinceCity && (
                    <input
                      ref={inputRefProvinceCity}
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
                    handleFocusInputWorkplace();
                    setDisplayInputWorkplace(true);
                    if (dataInputProvinceCity === "") {
                      setDisplayInputProvinceCity(false);
                    }
                    if (dataInputSchool === "") {
                      setDisplayInputSchool(false);
                    }
                    if (dataInputHomeTown === "") {
                      setDisplayInputHomeTown(false);
                    }
                    if (dataInputNickname === "") {
                      setDisplayInputNickname(false);
                    }
                  }}
                  className={`${styles.itemInput} ${
                    displayInputWorkplace && "border-bottom"
                  } ${
                    !displayInputWorkplace && "rounded-3"
                  } px-3 mb-2 d-flex flex-column justify-content-center`}
                >
                  <div
                    className={`${styles.label} ${
                      !displayInputWorkplace && "fs-6"
                    } ${
                      displayInputWorkplace && "mt-2"
                    } d-flex align-items-center`}
                  >
                    <BusinessCenterOutlinedIcon
                      className={`${styles.icon} ${
                        !displayInputWorkplace && "fs-4 me-2"
                      } ${displayInputWorkplace && "me-1"}`}
                    />
                    Workplace
                  </div>
                  {displayInputWorkplace && (
                    <input
                      ref={inputRefWorkplace}
                      onChange={(e) => {
                        setDataInputWorkplace(e.target.value);
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
                    handleFocusInputSchool();
                    setDisplayInputSchool(true);
                    if (dataInputProvinceCity === "") {
                      setDisplayInputProvinceCity(false);
                    }
                    if (dataInputWorkplace === "") {
                      setDisplayInputWorkplace(false);
                    }
                    if (dataInputHomeTown === "") {
                      setDisplayInputHomeTown(false);
                    }
                    if (dataInputNickname === "") {
                      setDisplayInputNickname(false);
                    }
                  }}
                  className={`${styles.itemInput} ${
                    displayInputSchool && "border-bottom"
                  } ${
                    !displayInputSchool && "rounded-3"
                  } px-3 mb-2 d-flex flex-column justify-content-center`}
                >
                  <div
                    className={`${styles.label} ${
                      !displayInputSchool && "fs-6"
                    } ${
                      displayInputSchool && "mt-2"
                    } d-flex align-items-center`}
                  >
                    <SchoolOutlinedIcon
                      className={`${styles.icon} ${
                        !displayInputSchool && "fs-4 me-2"
                      } ${displayInputSchool && "me-1"}`}
                    />
                    School
                  </div>
                  {displayInputSchool && (
                    <input
                      ref={inputRefSchool}
                      onChange={(e) => {
                        setDataInputSchool(e.target.value);
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
                    handleFocusInputHomeTown();
                    setDisplayInputHomeTown(true);
                    if (dataInputProvinceCity === "") {
                      setDisplayInputProvinceCity(false);
                    }
                    if (dataInputWorkplace === "") {
                      setDisplayInputWorkplace(false);
                    }
                    if (dataInputSchool === "") {
                      setDisplayInputSchool(false);
                    }
                    if (dataInputNickname === "") {
                      setDisplayInputNickname(false);
                    }
                  }}
                  className={`${styles.itemInput} ${
                    displayInputHomeTown && "border-bottom"
                  } ${
                    !displayInputHomeTown && "rounded-3"
                  } px-3 mb-2 d-flex flex-column justify-content-center`}
                >
                  <div
                    className={`${styles.label} ${
                      !displayInputHomeTown && "fs-6"
                    } ${
                      displayInputHomeTown && "mt-2"
                    } d-flex align-items-center`}
                  >
                    <LocationOnOutlinedIcon
                      className={`${styles.icon} ${
                        !displayInputHomeTown && "fs-4 me-2"
                      } ${displayInputHomeTown && "me-1"}`}
                    />
                    Home town
                  </div>
                  {displayInputHomeTown && (
                    <input
                      ref={inputRefHomeTown}
                      onChange={(e) => {
                        setDataInputHomeTown(e.target.value);
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
                    handleFocusInputNickname();
                    setDisplayInputNickname(true);
                    if (dataInputProvinceCity === "") {
                      setDisplayInputProvinceCity(false);
                    }
                    if (dataInputWorkplace === "") {
                      setDisplayInputWorkplace(false);
                    }
                    if (dataInputSchool === "") {
                      setDisplayInputSchool(false);
                    }
                    if (dataInputHomeTown === "") {
                      setDisplayInputHomeTown(false);
                    }
                  }}
                  className={`${styles.itemInput} ${
                    displayInputNickname && "border-bottom"
                  } ${
                    !displayInputNickname && "rounded-3"
                  } px-3 mb-2 d-flex flex-column justify-content-center`}
                >
                  <div
                    className={`${styles.label} ${
                      !displayInputNickname && "fs-6"
                    } ${
                      displayInputNickname && "mt-2"
                    } d-flex align-items-center`}
                  >
                    <BadgeOutlinedIcon
                      className={`${styles.icon} ${
                        !displayInputNickname && "fs-4 me-2"
                      } ${displayInputNickname && "me-1"}`}
                    />
                    Nickname
                  </div>
                  {displayInputNickname && (
                    <input
                      ref={inputRefNickname}
                      onChange={(e) => {
                        setDataInputNickname(e.target.value);
                      }}
                      className={`${styles.input} mb-2`}
                      type="text"
                      name=""
                    />
                  )}
                </div>
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
