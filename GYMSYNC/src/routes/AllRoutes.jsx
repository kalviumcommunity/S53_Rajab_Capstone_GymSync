import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Profile from "../pages/UserProfile/Profile";
import History from "../pages/History/History";
import Notification from "../pages/Notification/Notification";
import { ChakraProvider } from "@chakra-ui/react";
import SignUp from "../pages/Register/SignUp";
import Login from "../pages/Register/Login";
import NamePage from "../pages/Credentials/NamePage";
import HeightPage from "../pages/Credentials/HeightPage";
import WeightPage from "../pages/Credentials/WeightPage";
import userAtom from "../atoms/userAtoms";
import AuthPage from "../pages/Register/AuthPage";
import { useRecoilValue } from "recoil";
const AllRoutes = () => {
  const user = useRecoilValue(userAtom);

  return (
    <div>
      <Routes>
        <Route
          path="/auth"
          element={!user ? <AuthPage /> : <Navigate to="/" />}
        />
        <Route
          path="/"
          element={user ? <HomePage /> : <Navigate to="/auth" />}
        />{" "}
        <Route
          path="/profile"
          element={user ? <Profile /> : <Navigate to="/auth" />}
        />
        <Route
          path="/history"
          element={user ? <History /> : <Navigate to="/auth" />}
        />
        <Route
          path="/notification"
          element={user ? <Notification /> : <Navigate to="/auth" />}
        />
        <Route
          path="/name"
          element={user ? <NamePage /> : <Navigate to="/auth" />}
        />
        <Route
          path="/height"
          element={user ? <HeightPage /> : <Navigate to="/auth" />}
        />
        <Route
          path="/weight"
          element={user ? <WeightPage /> : <Navigate to="/auth" />}
        />
      </Routes>
    </div>
  );
};

export default AllRoutes;
