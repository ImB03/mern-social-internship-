import React from "react";

import styles from "./home.module.scss";
import Menu from "../../components/menu/Menu";
import Stories from "../../components/stories/Stories";
import CreatePost from "../../components/createPost/CreatePost";
import Posts from "../../components/posts/Posts";
import FriendList from "../../components/friendList/FriendList";
import Ad from "../../components/ad/Ad";
import MakeFriend from "../../components/makeFriend/MakeFriend";

export default function Home() {
  return (
    <div className={`${styles.home}`}>
      <div className="d-flex justify-content-between align-items-start">
        <div className={`${styles.leftSide} col-2`}>
          <Menu />
        </div>
        <div className={`${styles.middleSide} col-6 mb-5`}>
          <Stories />
          <CreatePost />
          <Posts />
          ...
        </div>
        <div className={`${styles.rightSide} col-3`}>
          <Ad />
          <MakeFriend />
          <FriendList />
        </div>
      </div>
    </div>
  );
}
