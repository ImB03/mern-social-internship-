import React from "react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { useLocation } from "react-router-dom";

import styles from "./stories.module.scss";

export default function Stories() {
  const location = useLocation();
  console.log(location);

  const imgs = [
    "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  return (
    <div className={`${styles.stories} mt-3`}>
      <div className="contianer-fluid">
        <div className="row gx-2">
          {location.pathname === "/" && (
            <div
              className={`${styles.createStories} ${
                location.pathname === "/profile" && "col-4"
              } ${location.pathname === "/" && "col"}`}
            >
              <div
                className={`${styles.wrapper} d-flex flex-column justify-content-end`}
              >
                <img
                  className={`${styles.img} position-relative`}
                  src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className={`${styles.info} position-absolute`}>
                  <i
                    className={`${styles.icon} fa-solid fa-circle-plus ms-3`}
                  ></i>
                  <div className={`${styles.name} ms-3 mb-2`}>create</div>
                </div>
              </div>
            </div>
          )}
          <div
            className={`${styles.createStories} ${
              location.pathname === "/profile" && "col-4"
            } ${location.pathname === "/" && "col"}`}
          >
            <div
              className={`${styles.wrapper} d-flex flex-column justify-content-end`}
            >
              <img
                className={`${styles.img} position-relative`}
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className={`${styles.info} position-absolute`}>
                <div className={`${styles.name} ms-3 mb-2`}>name</div>
              </div>
            </div>
          </div>
          <div
            className={`${styles.createStories} ${
              location.pathname === "/profile" && "col-4"
            } ${location.pathname === "/" && "col"}`}
          >
            <div
              className={`${styles.wrapper} d-flex flex-column justify-content-end`}
            >
              <img
                className={`${styles.img} position-relative`}
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className={`${styles.info} position-absolute`}>
                <div className={`${styles.name} ms-3 mb-2`}>name</div>
              </div>
            </div>
          </div>
          <div
            className={`${styles.createStories} ${
              location.pathname === "/profile" && "col-4"
            } ${location.pathname === "/" && "col"}`}
          >
            <div
              className={`${styles.wrapper} d-flex flex-column justify-content-end`}
            >
              <img
                className={`${styles.img} position-relative`}
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className={`${styles.info} position-absolute`}>
                <div className={`${styles.name} ms-3 mb-2`}>name</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
