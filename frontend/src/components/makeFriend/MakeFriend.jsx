import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import styles from "./makeFriend.module.scss";

export default function MakeFriend() {
  const friendRequest = [
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
    <div className={`${styles.makeFriend} mt-3 p-3`}>
      <div className="container-fluid p-0">
        <div className="d-flex justify-content-between align-items-center">
          <b className={`${styles.title}`}>Friend Request</b>
          <div
            className={`${styles.interact} d-flex justify-content-end align-items-center`}
          >
            See all
          </div>
        </div>
        <div className={`${styles.requests} mt-3`}>
          {friendRequest.map((item) => (
            <div
              className={`${styles.itemRequest} p-2 d-flex align-items-center`}
            >
              <img className={`${styles.img} me-3`} src={item.img} alt="" />

              <div className="col d-flex flex-column justify-content-center align-items-between">
                <div className="d-flex justify-content-between align-items-center">
                  <b className={`${styles.userName}`}>{item.name}</b>
                  <div className={`${styles.time}`}>2 days ago</div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <button className={`${styles.acceptBtn} col me-1`}>Accept</button>
                  <button className={`${styles.deleteBtn} col ms-1`}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
