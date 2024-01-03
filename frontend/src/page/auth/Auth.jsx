import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import styles from "./auth.module.scss";
import { ACTION_SIGNIN, ACTION_SIGNUP } from "../../reducers/slice/authSlice";

export default function Auth() {
  const isLoading = useSelector((state) => state.persistedReducer.auth.isLoading);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [dataUser, setDataUser] = useState({});

  console.log(isSignup);

  const getDataUser = (e) => {
    setDataUser({ ...dataUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(ACTION_SIGNUP({ dataUser, setIsSignup }));
    } else {
      dispatch(ACTION_SIGNIN({ dataUser, navigate }));
    }
  };

  // const handleKeyPress = (e) => {
  //   if (3) {
  //     // Kiểm tra xem keyCode có tồn tại không
  //     const keyCode = e.keyCode || e.which;

  //     // Tiếp tục xử lý chỉ khi keyCode tồn tại
  //     if (keyCode === 13) {
  //       // Ngăn chặn hành động mặc định của phím Enter
  //       e.preventDefault();

  //       // Gọi hàm xử lý submit
  //       handleSubmit();
  //     }
  //   }
  // };

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
                  // value={dataUser.userName}
                />
              )}
              <input
                onChange={getDataUser}
                className={`${styles.input} mb-4 ${!isSignup && "mt-2"}`}
                type="email"
                placeholder="Your email"
                name="email"
                // value={dataUser.useremail}
              />
              <input
                onChange={getDataUser}
                className={`${styles.input} mb-4`}
                type="password"
                placeholder="Your password"
                name="password"
                // value={dataUser.userpassword}
              />
              <button
                // className={`${styles.btn} ${isLoading && styles.disabled}`}
                className={`${styles.btn}`}
                onClick={handleSubmit}
                // onKeyDown={() => handleKeyPress()}
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
