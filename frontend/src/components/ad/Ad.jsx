import React from "react";

import styles from "./ad.module.scss";

export default function Ad() {
  return (
    <div className={`${styles.ad} p-3`}>
      <div className="container-fluid d-flex flex-column">
        <b className="mt-2">Sponsored</b>
        <img
          className={`${styles.img} mt-2`}
          src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <b className={`${styles.email} mt-2`}>giabao@gmail.com</b>
        <span className={`${styles.caption} my-2`}>
          Your pathway to stunning and immaculate beauty and made sure your skin
          is exfoliating skin and shining like light.
        </span>
      </div>
    </div>
  );
}
