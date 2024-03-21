import React, { createContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import { LOGNOUT } from "../../reducers/slice/slice";

const MyContext = createContext();

export default function PostState({ children }) {
  const [isCreatePost, setIsCreatePost] = useState(false);
  const [isUpdatePost, setIsUpdatePost] = useState(false);
  const [isDeletePost, setIsDeletePost] = useState(false);
  const [isDetailPost, setIsDetailPost] = useState(false);
  const [isUpdateUser, setIsUpdateUser] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [postId, setPostId] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [containerClass, setContainerClass] = useState("");
  const dispatch = useDispatch();


  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  if (
    isCreatePost ||
    isUpdatePost ||
    isDeletePost ||
    isDetailPost ||
    isUpdateUser ||
    isSearch
  ) {
    document.body.classList.add("cancelScroll");
  } else {
    document.body.classList.remove("cancelScroll");
  }

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) dispatch(LOGNOUT());
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Chạy chỉ một lần khi component được mount

  useEffect(() => {
    // if (windowWidth < 768) {
    //   setContainerClass("-sm");
    // } else if (windowWidth >= 768 && windowWidth < 992) {
    //   setContainerClass("-md");
    // } else if (windowWidth >= 992 && windowWidth < 1200) {
    //   setContainerClass("-lg");
    // } else if (windowWidth >= 1200 && windowWidth < 1400) {
    //   setContainerClass("-xl");
    // } else if (windowWidth >= 1400) {
    //   setContainerClass("-fluid");
    // } else {
    setContainerClass("");
    // }
  }, [windowWidth]);



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
        windowWidth,
        windowHeight,
        containerClass,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export { MyContext };
