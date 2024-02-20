import React, { createContext, useState } from "react";
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
  const [postId, setPostId] = useState("");
  const dispatch = useDispatch();

  const handleGetUser = (userId) => {
    dispatch(ACTION_GET_USER(userId));
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
        handleGetUser,
        handleFriendRequest,
        isSearch,
        setIsSearch,
        postId,
        setPostId,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export { MyContext };
