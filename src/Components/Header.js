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

  return (
    <header className="header">
      <div className="header_div_logo">
        {/* <a href="website.com"> */}
        {/* <img className="header_div_logo_img" src="" alt="logo" /> */}
        <span>logo</span>
        {/* </a> */}
      </div>

      <div className="header_div_right_side">
        {/* <MenuRoundedIcon className="MenuRoundedIcon" /> */}

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
              {/* <Link
                to="/classes"
                className="header_link"
                onClick={handleDrawerClose}
              > */}
              {/* <Link to="/"> */}
              <ListItem button key="home">
                <ListItemText primary="Home" />
              </ListItem>
              {/* </Link> */}
            </List>
            <Divider />
          </Drawer>
        </Box>
      </div>
    </header>
  );
}
