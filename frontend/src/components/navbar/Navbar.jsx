import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import styles from "./navbar.module.scss";
import DropdownNavMenu from "../dropdownNavMenu/DropdownNavMenu";

export default function Navbar() {
  const [isDropdownNavMenu, setIsDropdownNavMenu] = useState(false);

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
            className={`${styles.iconWrapper} ms-3 d-flex justify-content-center align-items-center`}
          >
            <i className={`${styles.icon} fa-regular fa-bell`}></i>
          </div>
          <div
            className={`${styles.iconWrapper} ms-3 d-flex justify-content-center align-items-center`}
          >
            <i className={`${styles.icon} fa-regular fa-comments`}></i>
          </div>
          <div
            className={`${styles.avatarWrapper} position-relative ms-3 d-flex justify-content-center align-items-center`}
          >
            <img
              className={`${styles.userImg}`}
              src="https://www.imgacademy.com/sites/default/files/img-academy-housing-hero.jpg"
              alt=""
            />
            <div
              onClick={() => setIsDropdownNavMenu(!isDropdownNavMenu)}
              className={`${styles.overlayUserImg} position-absolute`}
            ></div>

            {isDropdownNavMenu && (
              <>
                <div
                  onClick={() => {
                    setIsDropdownNavMenu(false);
                  }}
                  className={`${styles.overlay} position-fixed`}
                ></div>
                <DropdownNavMenu setIsDropdownNavMenu={setIsDropdownNavMenu} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
