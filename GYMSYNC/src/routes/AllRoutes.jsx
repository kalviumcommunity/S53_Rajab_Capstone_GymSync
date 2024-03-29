import React from "react";
import { Route, Routes } from "react-router-dom";
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
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/history" element={<History />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/name" element={<NamePage />} />
        <Route path="/height" element={<HeightPage />} />
        <Route path="/weight" element={<WeightPage />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
