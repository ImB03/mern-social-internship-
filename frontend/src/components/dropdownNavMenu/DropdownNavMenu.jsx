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
import { LOGNOUT } from "../../reducers/slice/authSlice";

export default function DropdownNavMenu({ setIsDropdownNavMenu }) {
  const dispatch = useDispatch();

  const handleLognout = () => {
    dispatch(LOGNOUT());
  };

  return (
    <div className={`${styles.dropdownNavMenu} position-absolute`}>
      <div className="container-fluid p-2">
        <div className={`${styles.wrapper}`}>
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
          <Link
            to="/auth"
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
          </Link>
        </div>
      </div>
    </div>
  );
}
