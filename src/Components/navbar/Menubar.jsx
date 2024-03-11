import React, { useContext } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Container from '@mui/material/Container';
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

import VinLogo from "../../img/vin-logo.png";
import { themeContext } from "../../Context.jsx";
import { Toggle } from "./toggle.jsx";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-scroll";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

const drawerWidth = 200;
const navItems = ["home", "about", "skill", "project", "contact"];

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function Menu(props) {
  const theme = useContext(themeContext);
  const darkmode = theme.state.darkmode;

  const cssProps = {
    background: darkmode ? "black" : "white",
    color: darkmode ? "white" : "black",
    boxShadow: "none",
    fontWeight: "600",
  };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <img className="logo" src={VinLogo} alt="" />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link to={item} smooth duration={500}>
                <ListItemText primary={item.toUpperCase()} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
        {/* // <Box sx={{ display: "flex" }}> */}
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar sx={{ ...cssProps, backgroundColor: "transparent" }}>
        <Container maxWidth="xl">
          <Toolbar>
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" }, ...cssProps }}
            >
              <MenuIcon />
            </IconButton>
            <div className="n-left">
              <div className="n-name">
                <img className="logo" src={VinLogo} alt="" />
              </div>
              <span>
                <Toggle />
              </span>
            </div>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Link to={item} smooth duration={500}>
                  <Button
                    key={item}
                    sx={{
                      mx: "10px",
                      ...cssProps,
                      backgroundColor: "transparent",
                    }}
                  >
                    {item}
                  </Button>
                </Link>
              ))}
            </Box>
            <Avatar
              alt="VIneet"
              src="https://cdn2.iconfinder.com/data/icons/female-avatars-4/256/avatars_accounts___woman_female_person_people_sunglasses_short_hair_earring_necklace.png"
            />
          </Toolbar>
        </Container>
        </AppBar>
      </HideOnScroll>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    {/* // </Box> */}
    </>
  );
}

Menu.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Menu;
