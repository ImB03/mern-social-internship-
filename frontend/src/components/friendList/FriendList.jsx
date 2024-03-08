import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import styles from "./friendList.module.scss";

export default function FriendList() {
  const friendList = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Yasuo",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Yaua",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Yaua",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Yaua",
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Yaua",
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Yaua",
    },
    {
      id: 7,
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Yaua",
    },
    {
      id: 8,
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Yaua",
    },
    {
      id: 9,
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Yaua",
    },
    {
      id: 10,
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Yaua",
    },
  ];

  return (
    <div className={`${styles.friendList} mt-3 p-3`}>
      <div className="container-fluid p-0">
        <div className="d-flex justify-content-between align-items-center">
          <b className={`${styles.title}`}>Friend List</b>
          <div
            className={`${styles.interact} d-flex justify-content-end align-items-center`}
          >
            <div className="ms-3">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="ms-3">
              <MoreHorizIcon />
            </div>
          </div>
        </div>
        <div className={`${styles.friends} mt-3`}>
          {friendList.map((item) => (
            <div
              key={item.id}
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
