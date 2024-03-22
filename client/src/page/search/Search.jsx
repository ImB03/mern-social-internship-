import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MyContext } from "../../hook/context/state";

import styles from "./search.module.scss";
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
import ModalPost from "../../components/modalPost/ModalPost";
import CardUserList from "../../components/cardUserList/CardUserList";
import ModalUser from "../../components/modalUser/ModalUser";
import FilterSearch from "../../components/filterSearch/FilterSearch";
import { useLocation, useParams } from "react-router-dom";
import { ACTION_SEARCH } from "../../reducers/slice/searchSlice";
import FilterSearch2 from "../../components/filterSearch2/FilterSearch2";

export default function Search() {
  const {
    isUpdatePost,
    isDeletePost,
    isDetailPost,
    setIsCreatePost,
    setIsUpdatePost,
    setIsDeletePost,
    setIsDetailPost,
    setIsUpdateUser,
    setIsSearch,
    setIsOpenMenu,
  } = useContext(MyContext);
  const [posts, setGetPosts] = useState(null);
  const [users, setGetUsers] = useState(null);

  const dispatch = useDispatch();
  const location = useLocation();
  const pageName = location.pathname.split("/")[1];
  const params = useParams();
  const queryParams = new URLSearchParams(location.search);
  const qValue = queryParams.get("q");

  useEffect(() => {
    if (qValue !== "") {
      dispatch(ACTION_SEARCH(qValue));
    }
  }, [qValue, dispatch]);

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
    <div className={`${styles.search} container-fluid px-3`}>
      {(isUpdatePost || isDeletePost || isDetailPost) && <ModalPost />}
      <div className="d-flex justify-content-center justify-content-lg-between align-items-start">
        <div className={`${styles.leftSide} d-none d-xl-block col-2`}>
          <Menu />
        </div>
        <div className={`${styles.middleSide} col-12 col-md-8 col-xl-6`}>
          <div className="d-md-none">
            <FilterSearch2 />
          </div>
          {(params.typeState === `searchall` ||
            params.typeState === `searcheverybody`) && (
            <CardUserList setGetUsers={setGetUsers} />
          )}

          {(params.typeState === `searchall` ||
            params.typeState === `searchpost`) && (
            <Posts setGetPosts={setGetPosts} />
          )}

          {users?.length === 0 && posts?.length === 0 && (
            <div className={`${styles.noResult}`}>
              No search results for '{qValue}'
            </div>
          )}
        </div>
        <div
          className={`${styles.rightSide} ps-3 p-xl-0 d-none d-md-block col-4 col-xl-3`}
        >
          <FilterSearch />
        </div>
      </div>
    </div>
  );
}
