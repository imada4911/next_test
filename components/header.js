"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HeaderNavi from "./headerNavi";
import { usePathname } from "next/navigation";

const header = () => {
  const [active, setActive] = useState();
  const pathName = usePathname();
  console.log(pathName);
  useEffect(() => {
    setActive(pathName);
  }, [pathName]);

  return (
    <Box component="section">
      <AppBar
        position="static"
        className="imada_test"
        sx={{
          background: "#fff",
          color: "rgb(25, 118, 210)",
        }}
      >
        <Toolbar>
          <Box
            component="section"
            sx={{
              paddingLeft: "60px",
              display: "flex",
              alignItems: "center",
              width: "100%",
              position: "relative",
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{
                position: "absolute",
                top: "50%",
                left: "20px",
                transform: "translateY(-50%)",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Logo
            </Typography>

            <HeaderNavi active={active} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default header;
