import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import History from "./pages/History/History";
import HomePage from "./pages/HomePage/HomePage";
import { ChakraProvider } from "@chakra-ui/react";
import Notification from "./pages/Notification/Notification";
function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <HomePage />
      {/* <ChakraProvider>
        <History />
      </ChakraProvider> */}
      {/* <ChakraProvider>
        <Notification />
      </ChakraProvider> */}
    </>
  );
}

export default App;
