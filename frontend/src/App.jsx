import React, { useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Auth from "./page/auth/Auth";
import Home from "./page/home/Home";
import Profile from "./page/profile/Profile";
import ExtraLayout from "./layout/ExtraLayout";
import MainLayout from "./layout/MainLayout";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { MyContext } from "./hook/context/postState";
import ModalUser from "./components/modalUser/ModalUser";

function App() {
  const user = useSelector((state) => state.persistedReducer.auth.user);
  const {
    isCreatePost,
    isUpdatePost,
    isDeletePost,
    isDetailPost,
    isUpdateUser,
  } = useContext(MyContext);

  if (
    isCreatePost ||
    isUpdatePost ||
    isDeletePost ||
    isDetailPost ||
    isUpdateUser
  ) {
    document.body.classList.add("cancelScroll");
  } else {
    document.body.classList.remove("cancelScroll");
  }

  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route element={user ? <MainLayout /> : <Navigate to="/auth" />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:userId" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
