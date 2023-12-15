import React from "react";

import styles from "./cardFriendList.module.scss";

export default function CardFriendList() {
  return (
    <div className={`${styles.cardFriendList} mt-3 p-3`}>
      <div className="container-fluid">
        <div className="d-flex justify-content-between">
          <b>Friends</b>
          <div>See all</div>
        </div>
        <div className="d-flex justify-content-start">
          <p className={`${styles.quantityFriend}`}>1.2k friends</p>
        </div>
        <div className={`${styles.friends} row g-2`}>
          <div className="col-4 d-flex justify-content-center align-items-center">
            <div
              className={`${styles.wrapper} d-flex flex-column align-items-start`}
            >
              <img
                className={`${styles.img}`}
                src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <b className={`${styles.userName}`}>Yasure</b>
            </div>
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center">
            <div
              className={`${styles.wrapper} d-flex flex-column align-items-start`}
            >
              <img
                className={`${styles.img}`}
                src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <b className={`${styles.userName}`}>Yasure</b>
            </div>
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center">
            <div
              className={`${styles.wrapper} d-flex flex-column align-items-start`}
            >
              <img
                className={`${styles.img}`}
                src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <b className={`${styles.userName}`}>Yasure</b>
            </div>
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center">
            <div
              className={`${styles.wrapper} d-flex flex-column align-items-start`}
            >
              <img
                className={`${styles.img}`}
                src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <b className={`${styles.userName}`}>Yasure</b>
            </div>
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center">
            <div
              className={`${styles.wrapper} d-flex flex-column align-items-start`}
            >
              <img
                className={`${styles.img}`}
                src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <b className={`${styles.userName}`}>Yasure</b>
            </div>
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center">
            <div
              className={`${styles.wrapper} d-flex flex-column align-items-start`}
            >
              <img
                className={`${styles.img}`}
                src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <b className={`${styles.userName}`}>Yasure</b>
            </div>
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center">
            <div
              className={`${styles.wrapper} d-flex flex-column align-items-start`}
            >
              <img
                className={`${styles.img}`}
                src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <b className={`${styles.userName}`}>Yasure</b>
            </div>
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center">
            <div
              className={`${styles.wrapper} d-flex flex-column align-items-start`}
            >
              <img
                className={`${styles.img}`}
                src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <b className={`${styles.userName}`}>Yasure</b>
            </div>
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center">
            <div
              className={`${styles.wrapper} d-flex flex-column align-items-start`}
            >
              <img
                className={`${styles.img}`}
                src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <b className={`${styles.userName}`}>Yasure</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
