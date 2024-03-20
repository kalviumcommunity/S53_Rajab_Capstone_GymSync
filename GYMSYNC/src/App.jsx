import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import History from "./pages/History/History";
import HomePage from "./pages/HomePage/HomePage";
import { ChakraProvider } from "@chakra-ui/react";
import AllRoutes from "./routes/AllRoutes";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <AllRoutes />
    </>
  );
}

export default App;
