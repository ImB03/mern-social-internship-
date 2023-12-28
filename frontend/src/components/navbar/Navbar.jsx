import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import styles from "./navbar.module.scss";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  return (
    <div className={`${styles.navbar} border d-flex align-items-center`}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="col d-flex justify-content-start align-items-center">
          <div className={`${styles.logo} me-4 d-flex align-items-center`}>
            Socialmedia
          </div>
          <div className={`${styles.search} border d-flex align-items-center `}>
            <button className={`${styles.searchBtn}`} onClick={() => {}}>
              <i className={`${styles.icon} fa-solid fa-magnifying-glass`}></i>
            </button>
            <input
              className={`${styles.searchInput}`}
              type="search"
              name=""
              id=""
            />
          </div>
        </div>

        <div className="col d-flex justify-content-end align-items-center">
          <div
            className={`${styles.iconWrapper} ms-4 d-flex justify-content-center align-items-center`}
          >
            <i className={`${styles.icon} fa-solid fa-bars`}></i>
          </div>
          <div
            className={`${styles.iconWrapper} ms-4 d-flex justify-content-center align-items-center`}
          >
            <i className={`${styles.icon} fa-regular fa-bell`}></i>
          </div>
          <div
            className={`${styles.iconWrapper} ms-4 d-flex justify-content-center align-items-center`}
          >
            <i className={`${styles.icon} fa-regular fa-comments`}></i>
          </div>
          <Link
            to="/auth"
            className={`ms-4 d-flex justify-content-center align-items-center`}
          >
            <img
              className={`${styles.userImg}`}
              src="https://jademcallistercom.files.wordpress.com/2016/05/instagram-icon.png"
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
