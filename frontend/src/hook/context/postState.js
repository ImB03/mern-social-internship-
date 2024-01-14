import React, { createContext, useState } from "react";
import { ACTION_GET_POST } from "../../reducers/slice/postSlice";
import { useDispatch } from "react-redux";
import { ACTION_GET_USER } from "../../reducers/slice/userSlice";

const MyContext = createContext();

export default function PostState({ children }) {
  const [isCreatePost, setIsCreatePost] = useState(false);
  const [isUpdatePost, setIsUpdatePost] = useState(false);
  const [isDeletePost, setIsDeletePost] = useState(false);
  const [isDetailPost, setIsDetailPost] = useState(false);
  const dispatch = useDispatch();

  const handleGetPost = (postId) => {
    dispatch(ACTION_GET_POST(postId));
  };
  const handleGetUser = (userId) => {
    dispatch(ACTION_GET_USER(userId));
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
        handleGetPost,
        handleGetUser,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export { MyContext };
