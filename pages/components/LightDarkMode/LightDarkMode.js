import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import { FormControlLabel, FormControl } from "@mui/material";

const LightDarkMode = ({ darkMode, setDarkMode }) => {
  const handleSwitch = (e) => {
    setDarkMode(e.target.checked);
  };
  return (
    <React.Fragment>
      <FormControl>
        <FormControlLabel
          control={
            <Switch
              disableRipple
              sx={{ m: 1 }}
              checked={darkMode}
              onChange={handleSwitch}
            />
          }
        />
      </FormControl>
    </React.Fragment>
  );
};

export default LightDarkMode;
