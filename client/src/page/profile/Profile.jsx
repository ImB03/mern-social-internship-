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
import { useLocation, useParams } from "react-router-dom";
import { ACTION_GET_USER } from "../../reducers/slice/userSlice";
import IntroduceUser from "../../components/introduceUser/IntroduceUser";

export default function Profile() {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const userNow = useSelector((state) => state.persistedReducer.slice.userNow);
  const location = useLocation();
  const pageName = location.pathname.split("/")[1];

  const {
    isCreatePost,
    isUpdatePost,
    isDeletePost,
    isDetailPost,
    isUpdateUser,
    setIsCreatePost,
    setIsUpdatePost,
    setIsDeletePost,
    setIsDetailPost,
    setIsUpdateUser,
    setIsSearch,
  } = useContext(MyContext);

  useEffect(() => {
    dispatch(ACTION_GET_USER(userId));
  }, [userId, dispatch]);

  useEffect(() => {
    setIsCreatePost(false);
    setIsUpdatePost(false);
    setIsDeletePost(false);
    setIsDetailPost(false);
    setIsUpdateUser(false);
    setIsSearch(false);
  }, [pageName]);

  return (
    <div className={`${styles.profile} container-fluid px-3`}>
      {isUpdatePost || isCreatePost || isDeletePost || isDetailPost ? (
        <ModalPost />
      ) : (
        isUpdateUser && <ModalUser />
      )}
      <div className="d-flex justify-content-center justify-content-lg-between align-items-start">
        <div className={`${styles.leftSide} d-none d-xl-block col-2`}>
          <Menu />
        </div>
        <div className={`${styles.middleSide} col-12 col-lg-8 col-xl-6`}>
          <InfoUser />
          <div className="d-block d-lg-none mt-3">
            <IntroduceUser />
          </div>
          {userId === userNow._id && <CreatePost />}
          <Posts />
        </div>
        <div
          className={`${styles.rightSide} ps-4 p-xl-0 d-none d-lg-block col-4 col-xl-3`}
        >
          <CardInfo />
          <StoreImg />
          <CardFriendList />
        </div>
      </div>
    </div>
  );
}
