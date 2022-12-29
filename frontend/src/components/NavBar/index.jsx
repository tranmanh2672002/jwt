import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import ModalLogin from "../ModalLogin";

function NavBar() {
  const [openModalLogin, setOpenModalLogin] = useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            JWT Demo
          </Typography>
          <Button onClick={() => setOpenModalLogin(true)} color="inherit">
            Login
          </Button>
          <ModalLogin
            openModal={openModalLogin}
            setOpenModal={setOpenModalLogin}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
