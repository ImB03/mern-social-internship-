import React, { useContext } from "react";
import { useSelector } from "react-redux";

import styles from "./menu.module.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Fund from "../../assets/13.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import { Link, NavLink } from "react-router-dom";
import { MyContext } from "../../hook/context/state";

export default function Menu() {
  const userNow = useSelector((state) => state.persistedReducer.slice.userNow);

  const Menu = [
    { id: 1, img: Friends, name: "Friends" },
    { id: 2, img: Groups, name: "Groups" },
    { id: 3, img: Market, name: "Marketplace" },
    { id: 4, img: Watch, name: "Watch" },
    { id: 5, img: Memories, name: "Memories" },
    { id: 6, img: Events, name: "Events" },
    { id: 7, img: Gaming, name: "Gaming" },
    { id: 8, img: Gallery, name: "Gallery" },
    { id: 9, img: Videos, name: "Videos" },
    { id: 10, img: Messages, name: "Messages" },
    { id: 11, img: Fund, name: "Fundraiser" },
    { id: 12, img: Tutorials, name: "Tutorials" },
    { id: 13, img: Courses, name: "Courses" },
  ];

  return (
    <div className={`${styles.menu} container-fluid p-0 mt-3`}>
      <NavLink
        to={`/profile/${userNow._id}`}
        // className={`${styles.itemMenu} col p-3 d-flex align-items-center`}
        className={({ isActive }) =>
          `${styles.itemMenu} ${
            isActive && styles.isActive
          } col p-3 d-flex align-items-center`
        }
      >
        <img
          className={`${styles.userAvatar} me-3`}
          src={`http://localhost:19000/assets/${
            userNow.userAvatar !== ""
              ? userNow.userAvatar
              : "defaultUserAvatar.png"
          }`}
          alt=""
        />
        <div className={`${styles.userName}`}>{userNow.userName}</div>
      </NavLink>
      {Menu.map((item) => (
        <div
          key={item.id}
          className={`${styles.itemMenu} col p-3 d-flex align-items-center`}
        >
          <img className={`${styles.img} me-3`} src={item.img} alt="" />
          <div className={`${styles.name}`}>{item.name}</div>
        </div>
      ))}
    </div>
  );
}
