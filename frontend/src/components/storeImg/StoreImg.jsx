import React from "react";

import styles from "./storeImg.module.scss";

export default function StoreImg() {
  return (
    <div className={`${styles.storeImg} mt-3 p-3`}>
      <div className="container-fluid">
        <div className="d-flex justify-content-between">
          <b>Image</b>
          <div>See all</div>
        </div>
        <div className={`${styles.imgs} mt-3 row g-1`}>
          <div className={`${styles.wrapperImg} col-4 d-flex justify-content-center align-items-center`}>
            <img
              className={`${styles.img}`}
              src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </div>
          <div className={`${styles.wrapperImg} col-4 d-flex justify-content-center align-items-center`}>
            <img
              className={`${styles.img}`}
              src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </div>
          <div className={`${styles.wrapperImg} col-4 d-flex justify-content-center align-items-center`}>
            <img
              className={`${styles.img}`}
              src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </div>
          <div className={`${styles.wrapperImg} col-4 d-flex justify-content-center align-items-center`}>
            <img
              className={`${styles.img}`}
              src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </div>
          <div className={`${styles.wrapperImg} col-4 d-flex justify-content-center align-items-center`}>
            <img
              className={`${styles.img}`}
              src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </div>
          <div className={`${styles.wrapperImg} col-4 d-flex justify-content-center align-items-center`}>
            <img
              className={`${styles.img}`}
              src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
