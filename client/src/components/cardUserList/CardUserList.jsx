import React, { useContext, useEffect, useState } from "react";

import styles from "./cardUserList.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { MyContext } from "../../hook/context/state";

export default function CardUserList({ setGetUsers }) {
  const users = useSelector((state) => state.persistedReducer.slice.users);
  const [processedUsers, setProcessedUsers] = useState([]);

  const params = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const qValue = queryParams.get("q");

  useEffect(() => {
    setProcessedUsers([]);
    setGetUsers([]);

    if (qValue === "") {
      setProcessedUsers([]);
      setGetUsers([]);
    } else {
      setProcessedUsers(users);
      setGetUsers(users);
    }
  }, [qValue]);

  return (
    <div
      className={`${styles.cardUserList} ${
        params.typeState === `searchall` && styles.styleWrapper
      } ${params.typeState === `searchall` && "mt-3 py-3"} container-fluid ${
        params.typeState === `searcheverybody` && "p-0 mt-3"
      }`}
    >
      {processedUsers.length !== 0 && params.typeState === "searchall" && (
        <>
          <div className={`${styles.title} mb-3`}>Everybody</div>
          <div className={`${styles.userList}`}>
            {processedUsers.slice(0, 5)?.map((user) => (
              <Link
                to={`/profile/${user._id}`}
                key={user._id} // Thêm key để React không cảnh báo hiệu suất
                className={`${styles.item} p-2 p-sm-3 d-flex align-items-center justify-content-between`}
              >
                <div className={`d-flex align-items-center`}>
                  <img
                    className={`${styles.userAvatar} me-3`}
                    src={`http://localhost:19000/assets/${
                      user.userAvatar !== ""
                        ? user.userAvatar
                        : "defaultUserAvatar.png"
                    }`}
                    alt=""
                  />
                  <div className={`${styles.userName}`}>{user.userName}</div>
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    //  ACTION_FRIEND_REQUEST(user._id)
                  }}
                  className={`${styles.btnAddFriend} py-2 px-2 px-sm-3`}
                >
                  Add friends
                </button>
              </Link>
            ))}
          </div>
          <Link to={`/search/searcheverybody?q=${qValue}`}>
            <div className={`${styles.btnSeeAll} py-2`}>See all</div>
          </Link>
        </>
      )}

      {processedUsers.length !== 0 &&
        params.typeState === `searcheverybody` && (
          <>
            {processedUsers.map((user) => (
              <Link
                to={`/profile/${user._id}`}
                className={`${styles.itemUser} container-fluid mb-3 p-3 d-flex align-items-center justify-content-between`}
              >
                <div className={`d-flex align-items-center`}>
                  <img
                    className={`${styles.userAvatar} me-3`}
                    src={`http://localhost:19000/assets/${
                      user.userAvatar !== ""
                        ? user.userAvatar
                        : "defaultUserAvatar.png"
                    }`}
                    alt=""
                  />
                  <div className={`${styles.userName}`}>{user.userName}</div>
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    //  ACTION_FRIEND_REQUEST(user._id)
                  }}
                  className={`${styles.btnAddFriend} py-2 px-2 px-sm-3`}
                >
                  Add friends
                </button>
              </Link>
            ))}
          </>
        )}
    </div>
  );
}
