import { Toaster } from "react-hot-toast";

import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Toaster
        position="top-right"
        gutter={10}
        containerStyle={{ margin: "6px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: { duration: 5000 },
          style: {
            fontSize: "16px",
            maxWidth: "400px",
            padding: "8px 12px",
            backgroundColor: "#d7d7d7",
            color: "#393939",
          },
        }}
      />
    </>
  );
}

export default App;
