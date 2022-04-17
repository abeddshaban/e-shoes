import "./Styles/Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

// mui
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { logOut, signInWithGoogle } from "./Functions";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/firebase";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function Header() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [UserState, setUserState] = useState(Boolean);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User

      // console.log(user);
      setUserState(true);
    } else {
      // User is signed out
      setUserState(false);
    }
  });

  return (
    <header className="header">
      <div className="header_div_logo">
        <Link to="/" className="header_link">
          {/* <img className="header_div_logo_img" src="" alt="logo" /> */}
          <span>logo</span>
        </Link>
      </div>

      <div className="header_div_right_side">
        {UserState ? (
          <button onClick={logOut}>logout</button>
        ) : (
          <button onClick={signInWithGoogle}>login with google</button>
        )}

        <Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>

          <Drawer
            open={open}
            sx={{
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: 240,
              },
            }}
            variant="persistent"
            anchor="right"
          >
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
              {/* Home */}
              <Link to="/" onClick={handleDrawerClose} className="header_link">
                <ListItem button key="home">
                  <ListItemText primary="Home" />
                </ListItem>
              </Link>
            </List>
            <Divider />
          </Drawer>
        </Box>
      </div>
    </header>
  );
}
