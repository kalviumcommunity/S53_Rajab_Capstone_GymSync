import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import History from "./pages/History/History";
import HomePage from "./pages/HomePage/HomePage";
import { ChakraProvider } from "@chakra-ui/react";
import Notification from "./pages/Notification/Notification";
import Profile from "./pages/UserProfile/Profile";
function App() {
  return (
    <>
      <Navbar />
      {/* <HomePage /> */}
      <Sidebar />
      {/* <ChakraProvider>
        <History />
      </ChakraProvider> */}
      <ChakraProvider>
        <Notification />
      </ChakraProvider>
      {/* <Profile /> */}
    </>
  );
}

export default App;
