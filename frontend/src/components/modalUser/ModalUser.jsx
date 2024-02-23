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
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";

import styles from "./modalUser.module.scss";
import DropzoneFile from "../dropzoneFile/DropzoneFile";

import { MyContext } from "../../hook/context/state";
import DropzoneAvatarUser from "../dropzoneAvatarUser/DropzoneAvatarUser";
import DropzoneCoverAvatar from "../dropzoneCoverAvatar/DropzoneCoverAvatar";
import { ACTION_UPDATE_USER } from "../../reducers/slice/userSlice";

export default function ModalUser() {
  const { setIsUpdateUser } = useContext(MyContext);
  const dispatch = useDispatch();

  const user = useSelector((state) => state.persistedReducer.slice.user);

  const [displayInputProvinceCity, setDisplayInputProvinceCity] = useState(
    user.provinceCity === "" ? false : true
  );
  const [displayInputWorkplace, setDisplayInputWorkplace] = useState(
    user.workplace === "" ? false : true
  );
  const [displayInputSchool, setDisplayInputSchool] = useState(
    user.school === "" ? false : true
  );
  const [displayInputHomeTown, setDisplayInputHomeTown] = useState(
    user.homeTown === "" ? false : true
  );
  const [displayInputUserName, setDisplayInputUserName] = useState(
    user.userName === "" ? false : true
  );
  const [displayInputNickname, setDisplayInputNickname] = useState(
    user.nickname === "" ? false : true
  );

  const [dataInputProvinceCity, setDataInputProvinceCity] = useState(
    useSelector((state) => state.persistedReducer.slice.user.provinceCity)
  );
  const [dataInputWorkplace, setDataInputWorkplace] = useState(
    useSelector((state) => state.persistedReducer.slice.user.workplace)
  );
  const [dataInputSchool, setDataInputSchool] = useState(
    useSelector((state) => state.persistedReducer.slice.user.school)
  );
  const [dataInputHomeTown, setDataInputHomeTown] = useState(
    useSelector((state) => state.persistedReducer.slice.user.homeTown)
  );
  const [dataInputUserName, setDataInputUserName] = useState(
    useSelector((state) => state.persistedReducer.slice.user.userName)
  );
  const [dataInputNickname, setDataInputNickname] = useState(
    useSelector((state) => state.persistedReducer.slice.user.nickname)
  );
  const [dataInputUserAvatar, setDataInputUserAvatar] = useState(
    useSelector((state) => state.persistedReducer.slice.user.userAvatar)
  );
  const [dataInputCoverAvatar, setDataInputCoverAvatar] = useState(
    useSelector((state) => state.persistedReducer.slice.user.coverAvatar)
  );

  const [dataUser, setDataUser] = useState({
    userAvatar: "",
    coverAvatar: "",
    provinceCity: "",
    workplace: "",
    school: "",
    homeTown: "",
    userName: "",
    nickname: "",
  });

  const inputRefProvinceCity = useRef(null);
  const inputRefWorkplace = useRef(null);
  const inputRefSchool = useRef(null);
  const inputRefHomeTown = useRef(null);
  const inputRefUserName = useRef(null);
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
  const handleFocusInputUserName = () => {
    if (displayInputUserName && inputRefUserName.current) {
      inputRefUserName.current.focus();
    }
  };
  const handleFocusInputNickname = () => {
    if (displayInputNickname && inputRefNickname.current) {
      inputRefNickname.current.focus();
    }
  };

  // useEffect(() => {
  //   setDataInputProvinceCity(user.provinceCity);
  //   setDataInputWorkplace(user.workplace);
  //   setDataInputSchool(user.school);
  //   setDataInputHomeTown(user.homeTown);
  //   setDataInputUserName(user.userName);
  //   setDataInputNickname(user.nickname);
  //   setDataInputUserAvatar(user.userAvatar);
  //   setDataInputCoverAvatar(user.coverAvatar);
  // }, [
  //   user.provinceCity,
  //   user.workplace,
  //   user.school,
  //   user.homeTown,
  //   user.userName,
  //   user.nickname,
  //   user.userAvatar,
  //   user.coverAvatar,
  // ]);

  useEffect(() => {
    setDataUser({
      ...dataUser,
      userAvatar: dataInputUserAvatar,
      coverAvatar: dataInputCoverAvatar,
      provinceCity: dataInputProvinceCity,
      workplace: dataInputWorkplace,
      school: dataInputSchool,
      homeTown: dataInputHomeTown,
      userName: dataInputUserName,
      nickname: dataInputNickname,
    });
  }, [
    dataInputProvinceCity,
    dataInputWorkplace,
    dataInputSchool,
    dataInputHomeTown,
    dataInputNickname,
    dataInputUserName,
    dataInputUserAvatar,
    dataInputCoverAvatar,
  ]);

  useEffect(() => {
    if (dataInputProvinceCity === "" && displayInputProvinceCity) {
      handleFocusInputProvinceCity();
    }
  }, [displayInputProvinceCity]);
  useEffect(() => {
    if (dataInputWorkplace === "" && displayInputWorkplace) {
      handleFocusInputWorkplace();
    }
  }, [displayInputWorkplace]);
  useEffect(() => {
    if (dataInputSchool === "" && displayInputSchool) {
      handleFocusInputSchool();
    }
  }, [displayInputSchool]);
  useEffect(() => {
    if (dataInputHomeTown === "" && displayInputHomeTown) {
      handleFocusInputHomeTown();
    }
  }, [displayInputHomeTown]);
  useEffect(() => {
    if (dataInputUserName === "" && displayInputUserName) {
      handleFocusInputUserName();
    }
  }, [displayInputUserName]);
  useEffect(() => {
    if (dataInputNickname === "" && displayInputNickname) {
      handleFocusInputNickname();
    }
  }, [displayInputNickname]);

  const handleSubmit = () => {
    dispatch(ACTION_UPDATE_USER({ dataUser }));
    setIsUpdateUser(false);
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
        if (dataInputUserName === "") {
          setDisplayInputUserName(false);
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
                      dataInputUserAvatar={dataInputUserAvatar}
                      setDataInputUserAvatar={setDataInputUserAvatar}
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
                    if (dataInputUserName === "") {
                      setDisplayInputUserName(false);
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
                      value={dataInputProvinceCity}
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
                    if (dataInputUserName === "") {
                      setDisplayInputUserName(false);
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
                      value={dataInputWorkplace}
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
                    if (dataInputUserName === "") {
                      setDisplayInputUserName(false);
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
                      value={dataInputSchool}
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
                    if (dataInputUserName === "") {
                      setDisplayInputUserName(false);
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
                      value={dataInputHomeTown}
                      className={`${styles.input} mb-2`}
                      type="text"
                      name=""
                    />
                  )}
                </div>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFocusInputUserName();
                    setDisplayInputUserName(true);
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
                  className={`${styles.itemInput} ${
                    displayInputUserName && "border-bottom"
                  } ${
                    !displayInputUserName && "rounded-3"
                  } px-3 mb-2 d-flex flex-column justify-content-center`}
                >
                  <div
                    className={`${styles.label} ${
                      !displayInputUserName && "fs-6"
                    } ${
                      displayInputUserName && "mt-2"
                    } d-flex align-items-center`}
                  >
                    <DriveFileRenameOutlineOutlinedIcon
                      className={`${styles.icon} ${
                        !displayInputUserName && "fs-4 me-2"
                      } ${displayInputUserName && "me-1"}`}
                    />
                    Your name
                  </div>
                  {displayInputUserName && (
                    <input
                      ref={inputRefUserName}
                      onChange={(e) => {
                        setDataInputUserName(e.target.value);
                      }}
                      value={dataInputUserName}
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
                    if (dataInputUserName === "") {
                      setDisplayInputUserName(false);
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
                      value={dataInputNickname}
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
