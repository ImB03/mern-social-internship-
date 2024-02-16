import React, { createContext, useState } from "react";
import {
  ACTION_GET_ALL_POSTS,
  ACTION_GET_ALL_POSTS_USER,
  ACTION_GET_POST,
} from "../../reducers/slice/postSlice";
import { useDispatch } from "react-redux";
import {
  ACTION_FRIEND_REQUEST,
  ACTION_GET_USER,
} from "../../reducers/slice/userSlice";

const MyContext = createContext();

export default function PostState({ children }) {
  const [isCreatePost, setIsCreatePost] = useState(false);
  const [isUpdatePost, setIsUpdatePost] = useState(false);
  const [isDeletePost, setIsDeletePost] = useState(false);
  const [isDetailPost, setIsDetailPost] = useState(false);
  const [isUpdateUser, setIsUpdateUser] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const dispatch = useDispatch();

  const handleGetPost = (postId) => {
    dispatch(ACTION_GET_POST(postId));
  };
  const handleGetUser = (userId) => {
    dispatch(ACTION_GET_USER(userId));
  };

  const handleGetAllPosts = () => {
    dispatch(ACTION_GET_ALL_POSTS());
  };

  const handleGetAllPostsUser = (userId) => {
    dispatch(ACTION_GET_ALL_POSTS_USER(userId));
  };

  const handleFriendRequest = (userId) => {
    dispatch(ACTION_FRIEND_REQUEST(userId));
  };

  return (
    <MyContext.Provider
      value={{
        isCreatePost,
        setIsCreatePost,
        isUpdatePost,
        setIsUpdatePost,
        isDeletePost,
        setIsDeletePost,
        isDetailPost,
        setIsDetailPost,
        isUpdateUser,
        setIsUpdateUser,
        handleGetPost,
        handleGetUser,
        handleGetAllPosts,
        handleGetAllPostsUser,
        handleFriendRequest,
        isSearch,
        setIsSearch,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export { MyContext };
