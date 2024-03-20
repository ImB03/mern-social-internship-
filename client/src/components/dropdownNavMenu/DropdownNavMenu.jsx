import React, { useContext } from "react";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import styles from "./dropdownNavMenu.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LOGNOUT } from "../../reducers/slice/slice";

export default function DropdownNavMenu({ setIsDropdownNavMenu }) {
  const userNow = useSelector((state) => state.persistedReducer.slice.userNow);

  const dispatch = useDispatch();

  const handleLognout = () => {
    dispatch(LOGNOUT());
  };

  return (
    <div
      className={`${styles.dropdownNavMenu} container p-2 position-absolute`}
    >
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.wrapperItem} p-1 mx-2 mb-3`}>
          <Link
            to={`/profile/${userNow._id}`}
            onClick={() => {
              setIsDropdownNavMenu(false);
            }}
            className={`${styles.item} p-2 d-flex justify-content-start align-items-center`}
          >
            <img
              className={`${styles.userAvatar} me-3`}
              src={`http://localhost:19000/assets/${
                userNow.userAvatar !== ""
                  ? userNow.userAvatar
                  : "defaultUserAvatar.png"
              }`}
              alt=""
            />
            <div className={`${styles.userName}`}>{userNow.userName}</div>
          </Link>
        </div>
        <div
          onClick={() => {
            setIsDropdownNavMenu(false);
          }}
          className={`${styles.item} p-2 d-flex justify-content-start align-items-center`}
        >
          <div
            className={`${styles.wrapperIcon} me-3 d-flex justify-content-center align-items-center`}
          >
            <SettingsOutlinedIcon className={`${styles.icon}`} />
          </div>
          <div className={`${styles.name}`}>Settings & privacy</div>
        </div>
        <div
          onClick={() => {
            setIsDropdownNavMenu(false);
          }}
          className={`${styles.item} p-2 d-flex justify-content-start align-items-center`}
        >
          <div
            className={`${styles.wrapperIcon} me-3 d-flex justify-content-center align-items-center`}
          >
            <HelpOutlineOutlinedIcon className={`${styles.icon}`} />
          </div>
          <div className={`${styles.name}`}>Help & support</div>
        </div>
        <div
          onClick={() => {
            setIsDropdownNavMenu(false);
          }}
          className={`${styles.item} p-2 d-flex justify-content-start align-items-center`}
        >
          <div
            className={`${styles.wrapperIcon} me-3 d-flex justify-content-center align-items-center`}
          >
            <FeedbackOutlinedIcon className={`${styles.icon}`} />
          </div>
          <div className={`${styles.name}`}>Comments</div>
        </div>
        <div
          onClick={() => {
            handleLognout();
            setIsDropdownNavMenu(false);
          }}
          className={`${styles.item} p-2 d-flex justify-content-start align-items-center`}
        >
          <div
            className={`${styles.wrapperIcon} me-3 d-flex justify-content-center align-items-center`}
          >
            <LogoutOutlinedIcon className={`${styles.icon}`} />
          </div>
          <div className={`${styles.name}`}>Logout</div>
        </div>
      </div>
    </div>
  );
}
