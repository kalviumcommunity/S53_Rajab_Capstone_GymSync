import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import History from "./pages/History/History";
import HomePage from "./pages/HomePage/HomePage";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <HomePage />
      {/* <ChakraProvider>
        <History />
      </ChakraProvider> */}
    </>
  );
}

export default App;
