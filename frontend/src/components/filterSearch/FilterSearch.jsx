import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { MyContext } from "../../hook/context/state";
import { Link, NavLink, useLocation } from "react-router-dom";

import styles from "./filterSearch.module.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Fund from "../../assets/13.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import BackupTableOutlinedIcon from "@mui/icons-material/BackupTableOutlined";

export default function FilterSearch() {
  const user = useSelector((state) => state.persistedReducer.slice.userNow);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const qValue = queryParams.get("q");

  const FilterItem = [
    {
      icon: <BackupTableOutlinedIcon className={`${styles.icon}`} />,
      name: "All",
      to: `/search/searchall?q=${qValue}`,
    },
    {
      icon: <PeopleAltOutlinedIcon className={`${styles.icon}`} />,
      name: "Everybody",
      to: `/search/searcheverybody?q=${qValue}`,
    },
    {
      icon: <ArticleOutlinedIcon className={`${styles.icon}`} />,
      name: "Post",
      to: `/search/searchpost?q=${qValue}`,
    },
  ];

  return (
    <div className={`${styles.filterSearch}`}>
      <div className="container-fluid p-3">
        <div className={`${styles.title} border-bottom pb-2 mb-2`}>
          Search Results
        </div>
        <div className={`${styles.titleFilter} pb-2`}>Filter</div>
        {FilterItem.map((item) => (
          <NavLink
            to={item.to}
            className={`${styles.itemFilter} col p-2 d-flex align-items-center`}
          >
            <div
              className={`${styles.wrapperIcon} me-2 d-flex align-items-center justify-content-center`}
            >
              {item.icon}
            </div>
            <div className={`${styles.name}`}>{item.name}</div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
