import React, { useState, useContext } from "react";
import { Box, Typography } from "@mui/material";
import LightDarkMode from "./LightDarkMode/LightDarkMode";
import { ApplicationContext } from "..";

const Header = () => {
  const { darkMode, setDarkMode } = useContext(ApplicationContext);
  console.log("Header Darkmode", darkMode);

  return (
    <Box
      sx={{
        width: "100%",
        height: "10vh",
        backgroundColor: "#2b2d42",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 2,
      }}
    >
      <Typography sx={{ color: "white", fontSize: 30 }}>
        React Animation Library
      </Typography>
      <Box>
        <LightDarkMode
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        ></LightDarkMode>
      </Box>
    </Box>
  );
};

export default Header;
