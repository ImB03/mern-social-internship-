import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import styles from "./friendList.module.scss";

export default function FriendList() {
  const friendList = [
    {
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Yasuo",
    },
    {
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Yaua",
    },
    {
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Yaua",
    },
    {
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Yaua",
    },
    {
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Yaua",
    },
    {
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Yaua",
    },
    {
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Yaua",
    },
    {
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Yaua",
    },
    {
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Yaua",
    },
    {
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Yaua",
    },
  ];

  return (
    <div className={`${styles.friendList} mt-3 p-3`}>
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center">
          <b className={`${styles.title}`}>Friend List</b>
          <div
            className={`${styles.interact} d-flex justify-content-end align-items-center`}
          >
            <div className="ms-3">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="ms-3">
              <MoreHorizIcon />
            </div>
          </div>
        </div>
        <div className={`${styles.friends} mt-3`}>
          {friendList.map((item) => (
            <div
              className={`${styles.itemFriend} p-2 d-flex align-items-center`}
            >
              <img className={`${styles.img} me-3`} src={item.img} alt="" />
              <b className={`${styles.userName}`}>{item.name}</b>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
