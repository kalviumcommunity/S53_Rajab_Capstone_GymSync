import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Profile from "../pages/UserProfile/Profile";
import History from "../pages/History/History";
import Notification from "../pages/Notification/Notification";
import { ChakraProvider } from "@chakra-ui/react";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/history" element={<History />} />
        <Route path="/notification" element={<Notification />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
