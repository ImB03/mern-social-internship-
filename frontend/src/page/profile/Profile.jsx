import React from "react";

import styles from "./profile.module.scss";
import Menu from "../../components/menu/Menu";
import Stories from "../../components/stories/Stories";
import CreatePost from "../../components/createPost/CreatePost";
import Posts from "../../components/posts/Posts";
import FriendList from "../../components/friendList/FriendList";
import Ad from "../../components/ad/Ad";
import MakeFriend from "../../components/makeFriend/MakeFriend";
import InfoUser from "../../components/infoUser/InfoUser";
import CardInfo from "../../components/cardInfo/CardInfo";
import StoreImg from "../../components/storeImg/StoreImg";
import CardFriendList from "../../components/cardFriendList/CardFriendList";

export default function Profile() {
  return (
    <div className={`${styles.profile}`}>
      <div className="d-flex justify-content-between align-items-start">
        <div className={`${styles.leftSide} col-2`}>
          <Menu />
        </div>
        <div className={`${styles.middleSide} col-6 mb-5`}>
          <InfoUser />
          <CreatePost />
          <Posts />
        </div>
        <div className={`${styles.rightSide} col-3`}>
          <CardInfo />
          <StoreImg />
          <CardFriendList />
        </div>
      </div>
    </div>
  );
}
