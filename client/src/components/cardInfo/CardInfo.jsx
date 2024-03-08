import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import styles from "./cardInfo.module.scss";
import Stories from "../stories/Stories";
import { useSelector } from "react-redux";

export default function CardInfo() {
  const user = useSelector((state) => state.persistedReducer.slice.user);

  return (
    <div className={`${styles.cardInfo} p-3`}>
      <div className="container-fluid p-0">
        <b className={`${styles.title}`}>Introduce</b>
        <div className={`${styles.wrapper} mt-2 mb-3`}>
          <div className={`${styles.itemInfo} py-2 d-flex align-items-center`}>
            <i className={`${styles.icon} me-3 fa-solid fa-graduation-cap`}></i>
            <div className={`${styles.info}`}>
              Studied at <b>{user.school}</b>
            </div>
          </div>
          <div className={`${styles.itemInfo} py-2 d-flex align-items-center`}>
            <i className={`${styles.icon} me-3 fa-solid fa-location-dot`}></i>
            <div className={`${styles.info}`}>
              Coming from <b>{user.school}</b>
            </div>
          </div>
          <div className={`${styles.itemInfo} py-2 d-flex align-items-center`}>
            <i className={`${styles.icon} me-3 fa-solid fa-house`}></i>
            <div className={`${styles.info}`}>
              Living in <b>{user.provinceCity}</b>
            </div>
          </div>
          <div className={`${styles.itemInfo} py-2 d-flex align-items-center`}>
            <i className={`${styles.icon} me-3 fa-solid fa-briefcase`}></i>
            <div className={`${styles.info}`}>
              Working in <b>{user.workplace}</b>
            </div>
          </div>
        </div>
        <b className={`${styles.title}`}>Stories</b>
        <Stories />
      </div>
    </div>
  );
}
