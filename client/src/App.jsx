import React, { useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
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
import ModalSearch from "./components/modalSearch/ModalSearch";

function App() {
  const userNow = useSelector((state) => state.persistedReducer.slice.userNow);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route element={userNow ? <MainLayout /> : <Navigate to="/" />}>
          <Route path="/home" element={<Home />} />
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/search/:typeState" element={<Search />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
