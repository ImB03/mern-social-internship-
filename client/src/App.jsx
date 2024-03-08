import React, { useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import decode from "jwt-decode";

import Auth from "./page/auth/Auth";
import Home from "./page/home/Home";
import Profile from "./page/profile/Profile";
import ExtraLayout from "./layout/ExtraLayout";
import MainLayout from "./layout/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { MyContext } from "./hook/context/state";
import ModalUser from "./components/modalUser/ModalUser";
import Search from "./page/search/Search";
import { LOGNOUT } from "./reducers/slice/slice";

function App() {
  const userNow = useSelector((state) => state.persistedReducer.slice.userNow);
  const dispatch = useDispatch();

  const {
    isCreatePost,
    isUpdatePost,
    isDeletePost,
    isDetailPost,
    isUpdateUser,
    isSearch,
  } = useContext(MyContext);

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

  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route element={userNow ? <MainLayout /> : <Navigate to="/auth" />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/search/:typeState" element={<Search />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
