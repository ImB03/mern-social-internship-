import React from "react";

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

export default function Menu() {
  const Menu = [
    // { img: "Friends", name: "Friends" },
    { img: Friends, name: "Friends" },
    { img: Groups, name: "Groups" },
    { img: Market, name: "Marketplace" },
    { img: Watch, name: "Watch" },
    { img: Memories, name: "Memories" },
    { img: Events, name: "Events" },
    { img: Gaming, name: "Gaming" },
    { img: Gallery, name: "Gallery" },
    { img: Videos, name: "Videos" },
    { img: Messages, name: "Messages" },
    { img: Fund, name: "Fundraiser" },
    { img: Tutorials, name: "Tutorials" },
    { img: Courses, name: "Courses" },
  ];

  return (
    <div className={`${styles.menu}`}>
     <div className="container-fluid">
          {Menu.map((item) => (
            <div className={`${styles.itemMenu} col p-3 d-flex align-items-center`}>
              <img className={`${styles.img} me-2`} src={item.img} alt="" />
              <div className={`${styles.name}`}>{item.name}</div>
            </div>
          ))}
     </div>
    </div>
  );
}
