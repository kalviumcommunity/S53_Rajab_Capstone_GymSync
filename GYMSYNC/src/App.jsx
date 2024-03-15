import { Home } from "iconsax-react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage/HomePage";
function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Sidebar />
    </>
  );
}

export default App;
