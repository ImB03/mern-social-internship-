import React, { useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import styles from "./navbar.module.scss";
import DropdownNavMenu from "../dropdownNavMenu/DropdownNavMenu";
import { MyContext } from "../../hook/context/state";
import ModalUser from "../modalUser/ModalUser";
import ModalSearch from "../modalSearch/ModalSearch";

export default function Navbar() {
  const userNow = useSelector((state) => state.persistedReducer.slice.userNow);

  const { isSearch, setIsSearch } = useContext(MyContext);

  const [isDropdownNavMenu, setIsDropdownNavMenu] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    // Function to close dropdown when clicked outside
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsDropdownNavMenu(false);
      }
    };

    // Add event listener when component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className={`${styles.navbar} px-3 border d-flex align-items-center`}>
      {isSearch && <ModalSearch />}
      <div className="container-fluid p-0 d-flex justify-content-between align-items-center">
        <div className="col d-flex justify-content-start align-items-center">
          <Link
            to="/"
            className={`${styles.logo} me-4 d-flex align-items-center`}
          >
            Socialmedia
          </Link>
        </div>

        <div className="col d-flex justify-content-end align-items-center">
          <div
            onClick={() => setIsSearch(true)}
            className={`${styles.iconWrapper} ms-3 d-flex justify-content-center align-items-center`}
          >
            <i className={`${styles.icon} fa-solid fa-magnifying-glass`}></i>
          </div>
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
            ref={menuRef} // Ref for the dropdown menu
          >
            <img
              className={`${styles.userAvatar}`}
              src={`http://localhost:19000/assets/${
                userNow.userAvatar !== ""
                  ? userNow.userAvatar
                  : "defaultUserAvatar.png"
              }`}
              alt=""
            />
            <div
              onClick={() => setIsDropdownNavMenu(!isDropdownNavMenu)}
              className={`${styles.overlayUserAvatar} position-absolute`}
            ></div>
            {isDropdownNavMenu && (
              <DropdownNavMenu setIsDropdownNavMenu={setIsDropdownNavMenu} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
