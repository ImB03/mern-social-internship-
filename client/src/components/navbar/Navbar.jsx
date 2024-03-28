import React, { useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

import styles from "./navbar.module.scss";
import DropdownNavMenu from "../dropdownNavMenu/DropdownNavMenu";
import { MyContext } from "../../hook/context/state";
import ModalUser from "../modalUser/ModalUser";
import ModalSearch from "../modalSearch/ModalSearch";
import MenuIcon from "@mui/icons-material/Menu";
import ModalMenu from "../modalMenu/ModalMenu";
import { Image } from "cloudinary-react";

export default function Navbar() {
  const userNow = useSelector((state) => state.persistedReducer.slice.userNow);
  const location = useLocation();
  const pageName = location.pathname.split("/")[1];

  const { isSearch, setIsSearch, isOpenMenu, setIsOpenMenu } =
    useContext(MyContext);

  const [isDropdownNavMenu, setIsDropdownNavMenu] = useState(false);

  const navMenuRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    // Function to close dropdown when clicked outside
    const handleClickOutside = (e) => {
      if (navMenuRef.current && !navMenuRef.current.contains(e.target)) {
        setIsDropdownNavMenu(false);
      }
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpenMenu(false);
      }
    };

    // Add event listener when component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navMenuRef, menuRef]);

  useEffect(() => {
    setIsDropdownNavMenu(false);
  }, [pageName]);

  return (
    <div className={`${styles.navbar} px-3 border d-flex align-items-center`}>
      {isSearch && <ModalSearch />}
      <div className="container-fluid p-0 d-flex justify-content-between align-items-center">
        <div className="col d-flex justify-content-start align-items-center">
          <Link
            to="/home"
            className={`${styles.wrapperLogo} me-3 d-flex justify-content-center align-items-center`}
          >
            <img
              className={`${styles.logo}`}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5SKcnhmfTvKpeNJPFALbc5px_2nPa_HSkm6dVpVYWeA&s"
              alt=""
            />
          </Link>
          <div ref={menuRef}>
            <div
              onClick={() => {
                setIsOpenMenu(!isOpenMenu);
              }}
              className={`${styles.iconWrapper} d-flex d-xl-none justify-content-center align-items-center`}
            >
              <MenuIcon className={`${styles.icon}`} />
            </div>
            {isOpenMenu && <ModalMenu setIsOpenMenu={setIsOpenMenu} />}
          </div>
        </div>
        <div className="col d-flex justify-content-end align-items-center">
          <div
            onClick={() => setIsSearch(true)}
            className={`${styles.iconWrapper} d-flex justify-content-center align-items-center`}
          >
            <i className={`${styles.icon} fa-solid fa-magnifying-glass`}></i>
          </div>
          <div
            className={`${styles.iconWrapper} d-none ms-3 d-sm-flex justify-content-center align-items-center`}
          >
            <i className={`${styles.icon} fa-regular fa-bell`}></i>
          </div>
          <div
            className={`${styles.iconWrapper} d-none ms-3 d-sm-flex justify-content-center align-items-center`}
          >
            <i className={`${styles.icon} fa-regular fa-comments`}></i>
          </div>
          <div
            className={`${styles.avatarWrapper} position-relative ms-3 d-flex justify-content-center align-items-center`}
            ref={navMenuRef} // Ref for the dropdown menu
          >
            <Image
              cloudName={process.env.REACT_APP_CLOUD_NAME}
              publicId={userNow.userAvatar}
              className={`${styles.userAvatar}`}
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
