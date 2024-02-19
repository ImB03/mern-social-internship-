import React, { useContext, useEffect } from "react";

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
import { useDispatch, useSelector } from "react-redux";
import ModalPost from "../../components/modalPost/ModalPost";
import { MyContext } from "../../hook/context/state";
import ModalUser from "../../components/modalUser/ModalUser";
import { useParams } from "react-router-dom";

export default function Profile() {
  const { userId } = useParams();

  const {
    isCreatePost,
    isUpdatePost,
    isDeletePost,
    isDetailPost,
    isUpdateUser,
    handleGetUser,
  } = useContext(MyContext);

  useEffect(() => {
    handleGetUser(userId);
  }, [userId, isUpdateUser]);

  return (
    <div className={`${styles.profile}`}>
      {isUpdatePost || isCreatePost || isDeletePost || isDetailPost ? (
        <ModalPost />
      ) : (
        isUpdateUser && <ModalUser />
      )}
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
