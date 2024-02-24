import React, { createContext, useState } from "react";
import { useDispatch } from "react-redux";

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
