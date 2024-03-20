import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import styles from "./introduceUser.module.scss";
import Stories from "../stories/Stories";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export default function IntroduceUser() {
  const user = useSelector((state) => state.persistedReducer.slice.user);

  return (
    <div className={`${styles.introduceUser} container-fluid p-3`}>
      {(user.school ||
        user.homeTown ||
        user.provinceCity ||
        user.workplace) && (
        <>
          <b className={`${styles.title}`}>Introduce</b>
          <div className={`${styles.wrapper} mt-2 mb-3`}>
            {user.school && (
              <div
                className={`${styles.itemInfo} py-2 d-flex align-items-center`}
              >
                <i
                  className={`${styles.icon} me-3 fa-solid fa-graduation-cap`}
                ></i>
                <div className={`${styles.info}`}>
                  Studied at <b>{user.school}</b>
                </div>
              </div>
            )}
            {user.homeTown && (
              <div
                className={`${styles.itemInfo} py-2 d-flex align-items-center`}
              >
                <i
                  className={`${styles.icon} me-3 fa-solid fa-location-dot`}
                ></i>
                <div className={`${styles.info}`}>
                  Coming from <b>{user.homeTown}</b>
                </div>
              </div>
            )}
            {user.provinceCity && (
              <div
                className={`${styles.itemInfo} py-2 d-flex align-items-center`}
              >
                <i className={`${styles.icon} me-3 fa-solid fa-house`}></i>
                <div className={`${styles.info}`}>
                  Living in <b>{user.provinceCity}</b>
                </div>
              </div>
            )}
            {user.workplace && (
              <div
                className={`${styles.itemInfo} py-2 d-flex align-items-center`}
              >
                <i className={`${styles.icon} me-3 fa-solid fa-briefcase`}></i>
                <div className={`${styles.info}`}>
                  Working in <b>{user.workplace}</b>
                </div>
              </div>
            )}
          </div>
        </>
      )}
      <b className={`${styles.title}`}>Stories</b>
      <Stories />
    </div>
  );
}
