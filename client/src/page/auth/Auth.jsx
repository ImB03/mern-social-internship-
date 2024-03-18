import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import styles from "./auth.module.scss";
import { ACTION_SIGNIN, ACTION_SIGNUP } from "../../reducers/slice/authSlice";
import { MyContext } from "../../hook/context/state";

export default function Auth() {
  const response = useSelector(
    (state) => state.persistedReducer.slice.response
  );
  const userNow = useSelector((state) => state.persistedReducer.slice.userNow);
  const { windowWidth } = useContext(MyContext);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [dataUser, setDataUser] = useState({});

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
        navigate("/home");
      }
    }
  }, [response, navigate, userNow]);

  return (
    <div
      className={`${styles.auth} d-flex justify-content-center align-items-center`}
    >
      <div
        className={`${styles.wrapper} ${
          styles.overFlow
        } container col col-xl-8 ${
          isSignup && "flex-row-reverse"
        } d-flex justify-content-center`}
      >
        <div
          className={`${styles.wrapperSideLeft} d-none p-5 ${
            isSignup ? styles.backgroundImgSignup : styles.backgroundImgSignin
          } d-md-flex flex-column justify-content-center`}
        >
          <h1 className={`${styles.fontSize} mb-4`}>
            {isSignup ? "Social Media!" : "Hello World."}
          </h1>
          <p className="mb-4 mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
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
        <div
          className={`${styles.wrapperSideRight} p-5 col-md-5 d-flex flex-column justify-content-center`}
        >
          <h1 className={`${styles.logo} d-md-none mb-3`}>SOCIALMEDIA.</h1>
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
            className={`${styles.btn} mb-3`}
            onClick={handleSubmit}
          >
            {isSignup ? "Register" : "Login"}
          </button>
          {isSignup
            ? windowWidth < 768 && (
                <span>
                  You have an account?{" "}
                  <u
                    style={{ color: "blue", cursor: "pointer" }}
                    onClick={() => setIsSignup(!isSignup)}
                  >
                    Sign Up
                  </u>
                </span>
              )
            : windowWidth < 768 && (
                <span>
                  Don't you have an account?{" "}
                  <u
                    style={{ color: "blue", cursor: "pointer" }}
                    onClick={() => setIsSignup(!isSignup)}
                  >
                    Sign In
                  </u>
                </span>
              )}
        </div>
      </div>
    </div>
  );
}
