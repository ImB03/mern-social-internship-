import React, { useState } from "react";
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

function App() {
  const [user, setUser] = useState(
    useSelector((state) => state.persistedReducer.auth.user)
  );

  useEffect(() => {
    setUser(user);
  }, [user]);

  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route element={user ? <MainLayout /> : <Navigate to="/auth" />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
