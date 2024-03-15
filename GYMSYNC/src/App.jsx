import { Home } from "iconsax-react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import TopContent from "./pages/HomePage/TopContent";

function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <Sidebar />
    </>
  );
}

export default App;
