import React from "react";

import styles from "./cardUserList.module.scss";
import { useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";

export default function CardUserList() {
  const users = useSelector((state) => state.search.users);
  const params = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const qValue = queryParams.get("q");

  return (
    <div
      className={`${styles.cardUserList} ${
        params.typeState === `searchall` && styles.styleWrapper
      } mt-3`}
    >
      {params.typeState === `searchall` && (
        <div className={`container-fluid p-3`}>
          <div className={`${styles.title} mb-3`}>Everybody</div>
          <div className={`${styles.userList}`}>
            {users?.map((user) => (
              <div
                className={`${styles.item} p-3 d-flex align-items-center justify-content-between`}
              >
                <div className={`d-flex align-items-center`}>
                  <img
                    className={`${styles.avatarUser} me-3`}
                    src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp"
                    alt=""
                  />
                  <div className={`${styles.userName}`}>{user.userName}</div>
                </div>
                <button className={`${styles.btnAddFriend} py-2 px-3`}>
                  Add friends
                </button>
              </div>
            ))}
          </div>
          <Link
            to={`/search/searcheverybody?q=${qValue}`}
            className={`${styles.btnSeeAll} mt-3 col-12 py-2`}
          >
            See all
          </Link>
        </div>
      )}

      {params.typeState === `searcheverybody` && (
        <div className="container-fluid p-0">
          {users?.map((user) => (
            <div
              className={`${styles.itemUser} mb-3 p-3 d-flex align-items-center justify-content-between`}
            >
              <div className={`d-flex align-items-center`}>
                <img
                  className={`${styles.avatarUser} me-3`}
                  src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp"
                  alt=""
                />
                <div className={`${styles.userName}`}>{user.userName}</div>
              </div>
              <button className={`${styles.btnAddFriend} py-2 px-3`}>
                Add friends
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
