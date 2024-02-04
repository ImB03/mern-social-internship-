import React, { useContext, useEffect } from "react";
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

export default function Search() {
  const { isCreatePost, isUpdatePost, isDeletePost, isDetailPost } =
    useContext(MyContext);
  const user = useSelector((state) => state.persistedReducer.auth.user);
  const dispatch = useDispatch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const qValue = queryParams.get("q");

  const {} = useContext(MyContext);

  useEffect(() => {
    if (qValue !== "") {
      dispatch(ACTION_SEARCH(qValue));
    }
  }, [qValue, dispatch, isCreatePost, isUpdatePost, isDeletePost]);

  return (
    <div className={`${styles.search}`}>
      {(isUpdatePost || isCreatePost || isDeletePost || isDetailPost) && (
        <ModalPost />
      )}
      <div className="d-flex justify-content-between align-items-start">
        <div className={`${styles.leftSide} col-2`}>
          <Menu />
        </div>
        <div className={`${styles.middleSide} col-6 mb-5`}>
          <CardUserList />
          <Posts />
        </div>
        <div className={`${styles.rightSide} col-3`}>
          <FilterSearch />
        </div>
      </div>
    </div>
  );
}
