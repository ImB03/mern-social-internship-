import React, { useContext, useEffect, useState } from "react";

import styles from "./home.module.scss";
import Menu from "../../components/menu/Menu";
import Stories from "../../components/stories/Stories";
import CreatePost from "../../components/createPost/CreatePost";
import Posts from "../../components/posts/Posts";
import FriendList from "../../components/friendList/FriendList";
import Ad from "../../components/ad/Ad";
import MakeFriend from "../../components/makeFriend/MakeFriend";
import { useDispatch, useSelector } from "react-redux";
import ModalPost from "../../components/modalPost/ModalPost";
import { MyContext } from "../../hook/context/state";
import { useLocation } from "react-router-dom";
import { ACTION_GET_ALL_POSTS } from "../../reducers/slice/postSlice";

export default function Home() {
  const dispatch = useDispatch();
  const location = useLocation();
  const pageName = location.pathname.split("/")[1];

  const {
    setIsCreatePost,
    setIsUpdatePost,
    setIsDeletePost,
    setIsDetailPost,
    setIsUpdateUser,
    setIsSearch,
    isCreatePost,
    isUpdatePost,
    isDeletePost,
    isDetailPost,
    setIsOpenMenu,
  } = useContext(MyContext);

  useEffect(() => {
    dispatch(ACTION_GET_ALL_POSTS());
  }, []);

  useEffect(() => {
    setIsCreatePost(false);
    setIsUpdatePost(false);
    setIsDeletePost(false);
    setIsDetailPost(false);
    setIsUpdateUser(false);
    setIsSearch(false);
    setIsOpenMenu(false);
  }, [pageName]);

  return (
    <div className={`${styles.home} container-fluid px-3`}>
      {(isUpdatePost || isCreatePost || isDeletePost || isDetailPost) && (
        <ModalPost />
      )}
      <div className="d-flex justify-content-center justify-content-lg-between align-items-start">
        <div className={`${styles.leftSide} d-none d-xl-block col-2`}>
          <Menu />
        </div>
        <div className={`${styles.middleSide} col-12 col-lg-8 col-xl-6`}>
          <Stories />
          <CreatePost />
          <Posts />
        </div>
        <div
          className={`${styles.rightSide} ps-4 p-xl-0 d-none d-lg-block col-4 col-xl-3`}
        >
          <Ad />
          {/* <MakeFriend /> */}
          <FriendList />
        </div>
      </div>
    </div>
  );
}
