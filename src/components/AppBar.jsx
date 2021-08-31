import {
  Toolbar,
  AppBar as MuiAppBar,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

import Donate from "./Donate";
import Menu from "./Menu";
import iconImage from "../images/icon.png";
import textImage from "../images/PRCtext.png";

function AppBar(props) {
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
            <Typography variant="h6">About Us</Typography>
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
          <Menu className={classes.menuButton} />
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
    height: "5vh", // this height + splash height to be 100vh
    minHeight: "5vh", // overriding mui's minHeight of 64px
    padding: "20px",
    backgroundColor: "black",
  },

  link: {
    textDecoration: "none",
    color: "white",
    "&:hover": {
      color: "dodgerblue",
    },
    // "&:visited": {
    //   color: "purple",
    // },
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
