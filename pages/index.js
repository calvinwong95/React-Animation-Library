import react, { createContext, useState } from "react";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import { Box } from "@mui/material";

export const ApplicationContext = createContext();

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  console.log("Homepage Darkmode", darkMode);
  return (
    <React.Fragment>
      <ApplicationContext.Provider value={{ darkMode, setDarkMode }}>
        <Box sx={{ backgroundColor: "black", width: "100vw", height: "100vh" }}>
          <Header></Header>
          <Homepage></Homepage>
          <Footer></Footer>
        </Box>
      </ApplicationContext.Provider>
    </React.Fragment>
  );
}
