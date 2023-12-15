import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import styles from "./cardInfo.module.scss";
import Stories from "../stories/Stories";

export default function CardInfo() {
  return (
    <div className={`${styles.cardInfo} p-3`}>
      <div className="container-fluid">
        <b className={`${styles.title}`}>Introduce</b>
        <div className={`${styles.wrapper} mt-3`}>
          <div className={`${styles.itemInfo} py-2 d-flex align-items-center`}>
            <i className={`${styles.icon} me-3 fa-solid fa-graduation-cap`}></i>
            <div className={`${styles.info}`}>
              Học Công nghệ hữu cơ hóa dầu tại{" "}
              <b>
                Đại học Bách khoa Hà Nội - Hanoi University of Science and
                Technology
              </b>
            </div>
          </div>
          <div className={`${styles.itemInfo} py-2 d-flex align-items-center`}>
            <i className={`${styles.icon} me-3 fa-solid fa-location-dot`}></i>
            <div className={`${styles.info}`}>
              Đến từ <b>Hà Tĩnh</b>
            </div>
          </div>
          <div className={`${styles.itemInfo} py-2 d-flex align-items-center`}>
            <i className={`${styles.icon} me-3 fa-solid fa-house`}></i>
            <div className={`${styles.info}`}>
              Sống tại <b>Hà Nội</b>
            </div>
          </div>
          <div className={`${styles.itemInfo} py-2 d-flex align-items-center`}>
            <i className={`${styles.icon} me-3 fa-solid fa-briefcase`}></i>
            <div className={`${styles.info}`}>
              Làm việc tại <b>Hà Nội</b>
            </div>
          </div>
          <div className={`${styles.itemInfo} py-2 d-flex align-items-center`}>
            <i className={`${styles.icon} me-3 fa-solid fa-envelope`}></i>
            <div className={`${styles.info}`}>bao@gmail.com</div>
          </div>
        </div>
        <Stories />
      </div>
    </div>
  );
}
