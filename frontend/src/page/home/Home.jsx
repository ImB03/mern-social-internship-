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
import { ACTION_GET_ALL_POSTS } from "../../reducers/slice/postSlice";
import ModalPost from "../../components/modalPost/ModalPost";
import { MyContext } from "../../hook/context/postState";
import { useLocation } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  const { isCreatePost, isUpdatePost, isDeletePost } = useContext(MyContext);

  useEffect(() => {
    dispatch(ACTION_GET_ALL_POSTS());
  }, [isCreatePost, dispatch, isUpdatePost, isDeletePost]);

  return (
    <div className={`${styles.home}`}>
      {(isUpdatePost || isCreatePost || isDeletePost) && <ModalPost />}
      <div className="d-flex justify-content-between align-items-start">
        <div className={`${styles.leftSide} col-2`}>{/* <Menu /> */}</div>
        <div className={`${styles.middleSide} col-6 mb-5`}>
          <Stories />
          <CreatePost />
          <Posts />
        </div>
        <div className={`${styles.rightSide} col-3`}>
          <Ad />
          {/* <MakeFriend /> */}
          {/* <FriendList /> */}
        </div>
      </div>
    </div>
  );
}
