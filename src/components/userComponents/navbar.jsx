import React from "react";
import { Box } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { NavLink, useNavigate } from "react-router-dom";


export default function Navbar() {
  const nav = useNavigate()

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "1%",
        }}
      >
        <Box sx={{ fontSize: "25px", fontWeight: "600", cursor:'pointer' }} onClick={()=>nav('/user')}>E V E N T G O</Box>
        <Box sx={{ display: "flex" }}>
          <Box sx={sx.navLinks} onClick={()=>nav('/user/events')} >Events</Box>
          <Box  sx={sx.navLinks}>About</Box>
          <Box sx={sx.navLinks}>My&nbsp;Bookings</Box>
          <Box sx={sx.navLinks}>Contact</Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", color: "#23a6f0" }}>
          <PersonOutlineIcon />
          <Box sx={sx.navLinks}>Login&nbsp;/&nbsp;Register</Box>
        </Box>
      </Box>
    </div>
  );
}

const sx = {
  navLinks: {
    paddingX: "5%",
    cursor: "pointer",
    display: "flex",
  },
};
