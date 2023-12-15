import React, { useState } from "react";

import styles from "./auth.module.scss";

export default function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div
      className={`${styles.auth} d-flex justify-content-center align-items-center`}
    >
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <div
          className={`${styles.wrapper} ${
            isSignUp && "flex-row-reverse"
          } d-flex  justify-content-center`}
        >
          <div
            className={`${styles.wrapperSideLeft}  ${
              isSignUp ? styles.backgroundImgSignup : styles.backgroundImgSignin
            } p-5 col d-flex justify-content-center align-items-center`}
          >
            <div className={`${styles.sideLeft} col d-flex flex-column`}>
              <h1 className={`${styles.fontSize} mb-4`}>
                {isSignUp ? "Social Media!" : "Hello World."}
              </h1>
              <p className="mb-4 mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                cum, alias totam numquam ipsa exercitationem dignissimos, error
                nam, consequatur.
              </p>
              <span>Don't you have an account?</span>
              <button
                className={`${styles.registerBtn} mt-3`}
                onClick={() => setIsSignUp(!isSignUp)}
              >
                {isSignUp ? "Login" : "Register"}
              </button>
            </div>
          </div>
          <div
            className={`${styles.wrapperSideRight} p-5 col-5 border d-flex justify-content-center align-items-center`}
          >
            <div className={`${styles.sideRight} col d-flex flex-column`}>
              <h1 className={`${styles.title} mb-3`}>
                {isSignUp ? "Register" : "Login"}
              </h1>
              {isSignUp && (
                <input
                  className={`${styles.input} mb-4 mt-2`}
                  type="text"
                  placeholder="Your name"
                />
              )}
              <input
                className={`${styles.input} mb-4 ${!isSignUp && "mt-2"}`}
                type="text"
                placeholder="Your email"
              />
              <input
                className={`${styles.input} mb-4`}
                type="password"
                placeholder="Your password"
              />
              <button className={`${styles.btn}`} onClick={null}>
                {isSignUp ? "Register" : "Login"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
{
}
