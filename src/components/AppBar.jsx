import {
  Toolbar,
  AppBar as MuiAppBar,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useRef, useState } from "react";

import Donate from "./Donate";
import Hamburger from "./Hamburger";
import Menu from "./Menu";
import iconImage from "../images/icon.png";
import textImage from "../images/PRCtext.png";
import { useOnClickOutside } from "../hooks";

function AppBar(props) {
  const node = useRef();
  const [open, setOpen] = useState(false);
  useOnClickOutside(node, () => setOpen(false));
  const classes = useStyles();
  return (
    <Grid className={classes.root} item xs={12}>
      <MuiAppBar position="static">
        <Toolbar className={classes.toolbar} disableGutters>
          <img className={`${classes.icon}`} src={iconImage} alt="icon" />
          <img className={`${classes.icon}`} src={textImage} alt="icon" />
          <a
            className={`${classes.link} ${classes.navItem}`}
            href="#about-section"
          >
            <Typography variant="h6">Home</Typography>
          </a>
          <a
            className={`${classes.link} ${classes.navItem}`}
            href="#about-section"
          >
            <Typography variant="h6">About</Typography>
          </a>
          <a
            className={`${classes.link} ${classes.navItem}`}
            href="#about-section"
          >
            <Typography variant="h6">Campaigns</Typography>
          </a>
          <a
            className={`${classes.link} ${classes.navItem}`}
            href="#about-section"
          >
            <Typography variant="h6">News</Typography>
          </a>
          <a
            className={`${classes.link} ${classes.navItem}`}
            href="#about-section"
          >
            <Typography variant="h6">Events</Typography>
          </a>
          <div ref={node}>
            <Hamburger
              open={open}
              setOpen={setOpen}
              className={classes.menuButton}
            />
            <Menu open={open} />
          </div>
          <Donate />
        </Toolbar>
      </MuiAppBar>
    </Grid>
  );
}

const useStyles = makeStyles({
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
  },
  icon: {
    height: "100%",
    padding: "0px 10px",
  },
  navItem: {
    padding: "0px 30px",
  },
  toolbar: {
    flexGrow: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "7vh",
    minHeight: "7vh", // overriding mui's minHeight of 64px
    padding: "1.5vh",
    backgroundColor: "black",
  },

  link: {
    textDecoration: "none",
    color: "white",
    "&:hover": {
      color: "dodgerblue",
    },
  },
  "@media (max-width: 768px)": {
    link: {
      display: "none",
    },
  },
  "@media (min-width: 769px)": {
    menuButton: {
      display: "none",
    },
  },
});

export default AppBar;
