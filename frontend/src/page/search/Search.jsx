import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MyContext } from "../../hook/context/postState";

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
import ModalUser from "../../components/modalUser/ModalUser";
import FilterSearch from "../../components/filterSearch/FilterSearch";

export default function Search() {
  const user = useSelector((state) => state.persistedReducer.auth.user);
  const dispatch = useDispatch();

  const {} = useContext(MyContext);

  useEffect(() => {}, []);

  return (
    <div className={`${styles.search}`}>
      <div className="d-flex justify-content-between align-items-start">
        <div className={`${styles.leftSide} col-2`}>
          <Menu />
        </div>
        <div className={`${styles.middleSide} col-6 mb-5`}></div>
        <div className={`${styles.rightSide} col-3`}>
          <FilterSearch />
        </div>
      </div>
    </div>
  );
}
