import React, { useContext, useEffect, useState } from "react";

import styles from "./cardUserList.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { MyContext } from "../../hook/context/state";

export default function CardUserList() {
  const users = useSelector((state) => state.persistedReducer.slice.users);
  const [processedUsers, setProcessedUsers] = useState([]);

  const params = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const qValue = queryParams.get("q");

  useEffect(() => {
    setProcessedUsers(users);
  }, [qValue]);

  return (
    <div
      className={`${styles.cardUserList} ${
        params.typeState === `searchall` && styles.styleWrapper
      } mt-3`}
    >
      {processedUsers.length !== 0 && params.typeState === "searchall" && (
        <div className={`container-fluid p-3`}>
          <div className={`${styles.title} mb-3`}>Everybody</div>
          <div className={`${styles.userList}`}>
            {processedUsers.slice(0, 5)?.map((user) => (
              <Link
                to={`/profile/${user._id}`}
                key={user._id} // Thêm key để React không cảnh báo hiệu suất
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
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    //  ACTION_FRIEND_REQUEST(user._id)
                  }}
                  className={`${styles.btnAddFriend} py-2 px-3`}
                >
                  Add friends
                </button>
              </Link>
            ))}
          </div>
          <Link to={`/search/searcheverybody?q=${qValue}`}>
            <div className={`${styles.btnSeeAll} py-2`}>See all</div>
          </Link>
        </div>
      )}

      {processedUsers.length !== 0 &&
        params.typeState === `searcheverybody` && (
          <div className="container-fluid p-0">
            {processedUsers?.map((user) => (
              <Link
                to={`/profile/${user._id}`}
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
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    //  ACTION_FRIEND_REQUEST(user._id)
                  }}
                  className={`${styles.btnAddFriend} py-2 px-3`}
                >
                  Add friends
                </button>
              </Link>
            ))}
          </div>
        )}
    </div>
  );
}
