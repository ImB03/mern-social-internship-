import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import styles from "./auth.module.scss";
import { ACTION_SIGNIN, ACTION_SIGNUP } from "../../reducers/slice/AuthSlice";

export default function Auth() {
  const response = useSelector(
    (state) => state.persistedReducer.slice.response
  );
  const userNow = useSelector((state) => state.persistedReducer.slice.userNow);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [dataUser, setDataUser] = useState({});

  console.log(dataUser);
  console.log(response);

  const getDataUser = (e) => {
    setDataUser({ ...dataUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(ACTION_SIGNUP(dataUser));
      if (response?.status === 200) {
      }
    } else {
      dispatch(ACTION_SIGNIN(dataUser));
      if (response?.status === 200) {
      }
    }
  };

  const handleKeyPress = (e) => {
    // Kiểm tra xem biến sự kiện (e) có tồn tại không
    if (e) {
      // Kiểm tra xem keyCode có tồn tại không
      const keyCode = e.keyCode || e.which;

      // Tiếp tục xử lý chỉ khi keyCode tồn tại
      if (keyCode === 13) {
        // Ngăn chặn hành động mặc định của phím Enter
        e.preventDefault();

        // Gọi hàm xử lý submit
        handleSubmit(e);
      }
    }
  };

  useEffect(() => {
    if (response && response.status === 200) {
      if (isSignup) {
        setIsSignup(false);
      } else if (userNow) {
        navigate("/");
      }
    }
  }, [response, navigate, userNow]);

  return (
    <div
      className={`${styles.auth} d-flex justify-content-center align-items-center`}
    >
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <div
          className={`${styles.wrapper} ${
            isSignup && "flex-row-reverse"
          } d-flex  justify-content-center`}
        >
          <div
            className={`${styles.wrapperSideLeft}  ${
              isSignup ? styles.backgroundImgSignup : styles.backgroundImgSignin
            } p-5 col d-flex justify-content-center align-items-center`}
          >
            <div className={`${styles.sideLeft} col d-flex flex-column`}>
              <h1 className={`${styles.fontSize} mb-4`}>
                {isSignup ? "Social Media!" : "Hello World."}
              </h1>
              <p className="mb-4 mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                cum, alias totam numquam ipsa exercitationem dignissimos, error
                nam, consequatur.
              </p>
              {isSignup ? (
                <span>You have an account?</span>
              ) : (
                <span>Don't you have an account?</span>
              )}
              <button
                className={`${styles.registerBtn} mt-3`}
                onClick={() => setIsSignup(!isSignup)}
              >
                {isSignup ? "Login" : "Register"}
              </button>
            </div>
          </div>
          <div
            className={`${styles.wrapperSideRight} p-5 col-5 border d-flex justify-content-center align-items-center`}
          >
            <div className={`${styles.sideRight} col d-flex flex-column`}>
              <h1 className={`${styles.title} mb-3`}>
                {isSignup ? "Register" : "Login"}
              </h1>
              {isSignup && (
                <input
                  onChange={getDataUser}
                  className={`${styles.input} mb-4 mt-2`}
                  type="text"
                  placeholder="Your name"
                  name="userName"
                  value={dataUser.userName || ""}
                  onKeyDown={handleKeyPress}
                />
              )}
              <input
                onChange={getDataUser}
                className={`${styles.input} mb-4 ${!isSignup && "mt-2"}`}
                type="email"
                placeholder="Your email"
                name="email"
                value={dataUser.email || ""}
                onKeyDown={handleKeyPress}
              />
              <input
                onChange={getDataUser}
                className={`${styles.input} mb-4`}
                type="password"
                placeholder="Your password"
                name="password"
                onKeyDown={handleKeyPress}
                value={dataUser.password || ""}
              />
              <button
                // className={`${styles.btn} ${isLoading && styles.disabled}`}
                className={`${styles.btn}`}
                onClick={handleSubmit}
              >
                {isSignup ? "Register" : "Login"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
