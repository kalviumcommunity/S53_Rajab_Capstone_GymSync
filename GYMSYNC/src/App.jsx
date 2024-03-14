import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import TopContent from "./pages/HomePage/TopContent";

function App() {
  return (
    <>
      <Navbar />
      <TopContent />
      <Sidebar />
    </>
  );
}

export default App;
