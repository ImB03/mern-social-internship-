import React, { useContext, useEffect, useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import AddIcon from "@mui/icons-material/Add";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";

import styles from "./infoUser.module.scss";
import Menu from "../menu/Menu";
import Stories from "../stories/Stories";
import CreatePost from "../createPost/CreatePost";
import Posts from "../posts/Posts";
import FriendList from "../friendList/FriendList";
import Ad from "../ad/Ad";
import MakeFriend from "../makeFriend/MakeFriend";
import { MyContext } from "../../hook/context/state";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function InfoUser() {
  const { userId } = useParams();
  const [processedUsers, setProcessedUsers] = useState({});
  const { setIsUpdateUser } = useContext(MyContext);
  let likeQuantity = 0;

  const user = useSelector((state) => state.persistedReducer.slice.user);
  const posts = useSelector((state) => state.persistedReducer.slice.posts);

  const processedPosts = posts.filter((post) => post.creator.userId === userId);

  processedPosts.forEach((post) => {
    if (post.likes?.length !== 0) {
      likeQuantity = likeQuantity + post.likes?.length;
    }
  });

  useEffect(() => {
    setProcessedUsers({});
    setProcessedUsers(user);
  }, [user, userId]);

  useEffect(() => {
    setProcessedUsers({});
  }, []);

  return (
    <div className={`${styles.infoUser} d-flex flex-column align-items-center`}>
      <img
        className={`${styles.coverAvatar}`}
        src={`https://mern-social-internship.onrender.com/assets/${
          processedUsers.coverAvatar !== ""
            ? processedUsers.coverAvatar
            : "defaultCoverAvatar.png"
        }`}
        alt=""
      />
      <div
        className={`${styles.wrapper} p-3 mt-3 col-12 d-flex flex-column align-items-center`}
      >
        <div className="container-fluid p-0 d-flex justify-content-center position-relative">
          <div
            className={`${styles.wrapperImg} d-flex align-items-center justify-content-center position-absolute`}
          >
            <img
              className={`${styles.userAvatar}`}
              src={`https://mern-social-internship.onrender.com/assets/${
                processedUsers.userAvatar !== ""
                  ? processedUsers.userAvatar
                  : "defaultUserAvatar.png"
              }`}
              alt=""
            />
          </div>
          <div className={`${styles.info} col-12 d-flex flex-column`}>
            <div
              className={`${styles.interact} d-flex justify-content-between`}
            >
              <div className={`${styles.leftSide}`}>
                <div
                  className={`${styles.quantity} d-flex justify-content-center`}
                >
                  <div className="me-2">
                    <b>{user.friends?.length}</b> friends
                  </div>
                  <div className="me-2">
                    <b>{processedPosts.length}</b> posts
                  </div>
                  <div className="me-2">
                    <b>{likeQuantity}</b> likes
                  </div>
                </div>
              </div>
              <div className={`${styles.rightSide} d-flex`}>
                {/* {?
                <>
                <button className={`${styles.btnFriend} me-2 d-flex justify-content-center align-items-center`}>
                  <HowToRegIcon className={`${styles.icon} me-1`} />
                  Friend
                </button>
                <button className={`${styles.btnMessenger} me-2 d-flex justify-content-center align-items-center`}>
                  <ChatOutlinedIcon className={`${styles.icon} me-1`} />Messenger
                </button>
                </>
                :
                <>
                <button
                  className={`${styles.btnAddNews} me-2 d-flex justify-content-center align-items-center`}
                >
                  <AddIcon className={`${styles.icon} me-1`} />
                  Add news
                </button>
                <button
                  className={`${styles.btnEditProfile} me-2 d-flex justify-content-center align-items-center`}
                >
                  <ModeEditOutlineIcon className={`${styles.icon} me-1`} />
                  Edit profile
                </button>
                </>
                } */}
                <>
                  {/* <button
                    className={`${styles.btnAddNews} me-2 d-flex justify-content-center align-items-center`}
                  >
                    <AddIcon className={`${styles.icon} me-1`} />
                    Add news
                  </button> */}
                  <button
                    onClick={() => setIsUpdateUser(true)}
                    className={`${styles.btnEditProfile} me-2 d-flex justify-content-center align-items-center`}
                  >
                    <ModeEditOutlineIcon className={`${styles.icon} me-1`} />
                    Edit profile
                  </button>
                </>
                <button
                  className={`${styles.btnMore} d-flex justify-content-center align-items-center`}
                >
                  <MoreHorizIcon className={`${styles.icon}`} />
                </button>
              </div>
            </div>
            <h3 className={`${styles.userName} d-flex justify-content-center`}>
              {processedUsers?.userName}
            </h3>
            <p className={`${styles.nickName} d-flex justify-content-center`}>
              @{processedUsers?.nickname}
            </p>
            <div
              className={`${styles.contact} mt-2 d-flex justify-content-start`}
            >
              <div className="d-flex">
                <div
                  className={`${styles.itemInfo} py-2 me-4 d-flex align-items-center`}
                >
                  <i className={`${styles.icon} me-2 fa-brands fa-github`}></i>
                  <div className={`${styles.link}`}>
                    https://github.com/ImB03
                  </div>
                </div>
                <div
                  className={`${styles.itemInfo} py-2 me-4 d-flex align-items-center`}
                >
                  <i
                    className={`${styles.icon} me-2 fa-brands fa-linkedin-in`}
                  ></i>
                  <div className={`${styles.link}`}>
                    https://github.com/ImB03
                  </div>
                </div>
                <div
                  className={`${styles.itemInfo} py-2 me-4 d-flex align-items-center`}
                >
                  <i className={`${styles.icon} me-2 fa-solid fa-envelope`}></i>
                  <div className={`${styles.link}`}>giabao7803@gmail.com</div>
                </div>
              </div>
              <div className="col d-flex align-items-center justify-content-end">
                <i className="me-2 fa-brands fa-square-facebook"></i>
                <i className="me-2 fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>
        </div>
        <hr className={`${styles.hr} col-12 mt-2`} />
        <div className={`${styles.navigate} d-flex col-12`}>
          <div className={`${styles.itemNavigate} px-3 py-2`}>Posts</div>
          <div className={`${styles.itemNavigate} px-3 py-2`}>Videos</div>
          <div className={`${styles.itemNavigate} px-3 py-2`}>Images</div>
          <div className={`${styles.itemNavigate} px-3 py-2`}>Friends</div>
        </div>
      </div>
    </div>
  );
}
