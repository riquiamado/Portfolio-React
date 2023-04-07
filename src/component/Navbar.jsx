import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import InfoIcon from "@mui/icons-material/Info";
import TungstenIcon from "@mui/icons-material/Tungsten";
import BuildIcon from "@mui/icons-material/Build";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import MenuIcon from "@mui/icons-material/Menu";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import {
  AppBar,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Toolbar,
} from "@mui/material";
import { IconButton, makeStyles } from "@material-ui/core";

const links = [
  {
    id: "about",
    text: "About Me",
    icons: <InfoIcon fontSize="large" />,
  },
  {
    id: "skills",
    text: "Skills",
    icons: <TungstenIcon fontSize="large" />,
  },
  {
    id: "works",
    text: "My works",
    icons: <BuildIcon fontSize="large" />,
  },
  {
    id: "contact",
    text: "Get In Touch",
    icons: <ContactMailIcon fontSize="large" />,
  },
];

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <AppBar position="sticky" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <img
            src={"https://res.cloudinary.com/dwyfwbq1s/image/upload/v1680856422/portfolio/programmer-colorful-logo-design-9ff77b_ke4x3d.jpg"}
            className={classes.logo}
            alt="logo"
            onClick={scrollToTop}
          />
          <List className={classes.menu}>
            {links.map(({ id, text }, index) => (
              <Link
                className={classes.sidebar}
                key={index}
                to={id}
                spy={true}
                activeClass={"active"}
                smooth={true}
                duration={500}
                offset={-70}
              >
                {text}
              </Link>
            ))}
          </List>
          <IconButton
            edge="end"
            className={classes.menuButton}
            onClick={() => setOpen(true)}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <IconButton onClick={() => setOpen(false)}>
          <DisabledByDefaultIcon fontSize="large" className={classes.disable} />
        </IconButton>
        <Divider />
        {links?.map(({ id, text, icons }, index) => (
          <Link
            key={index}
            className={classes.sidebar}
            to={id}
            spy={true}
            activeClass="active"
            smooth={true}
            duration={500}
            offset={-70}
          >
            <ListItem component={"h5"}>
              <span>
                <ListItemIcon>{icons}</ListItemIcon>
              </span>
              {text}
            </ListItem>
          </Link>
        ))}
      </Drawer>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#fafafa",
    top: "0",
    left: "0",
    right: "0",
    zIndex: "999",
  },
  toolbar: {
    display: "flex",
    justifyConten: "flex-start",
    alignItems: "center",
  },
  logo: {
    height: "1.5rem",
    objectFit: "contain",
    " &:hover": {
      cursor: "pointer",
    },
  },
  menu: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    "& a": {
      color: "#333",
      fontSize: "1.4rem",
      fontWeight: "bold",
      marginLeft: theme.spacing(3),
    },
    "& a:hover": {
      cursor: "pointer",
      color: "tomato",
      borderBottom: "3px solid tomato",
    },
  },
  menuButton: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      color: "tomato",
      position: "absolute",
      top: 0,
      right: 10,
    },
  },
  disable: {
    color: "tomato",
    cursor: "pointer",
    position: "absolute",
    top: 0,
    right: 10,
  },
  sidebar: {
    width: "40vw",
    [theme.breakpoints.down("sm")]: {
      width: "60vw",
    },
    "& h5": {
      color: "#333",
      margin: theme.spacing(10, 0, 0, 4),
      fontSize: "1.4rem",
      fontWeight: "bold",
    },
    "& h5:hover": {
      color: "tomato",
      cursor: "pointer",
    },
  },
}));

export default Navbar;
