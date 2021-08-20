import {
  Toolbar,
  AppBar as MuiAppBar,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

import Menu from "./Menu";
import image from "../images/icon.png";

function AppBar(props) {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <MuiAppBar position="static">
        <Toolbar className={classes.toolbar} disableGutters>
          <img
            className={`${classes.icon} ${classes.navItem}`}
            src={image}
            alt="icon"
          />
          <Typography className={classes.navItem} variant="h6">
            {props.appTitle}
          </Typography>
          <div className={classes.links}>
            <a
              className={`${classes.link} ${classes.navItem}`}
              href="#about-section"
            >
              <Typography>About</Typography>
            </a>
            <a
              className={`${classes.link} ${classes.navItem}`}
              href="#about-section"
            >
              <Typography>Blog</Typography>
            </a>
            <a
              className={`${classes.link} ${classes.navItem}`}
              href="#about-section"
            >
              <Typography>Contact</Typography>
            </a>
            <Menu className={classes.menuButton} />
          </div>
        </Toolbar>
      </MuiAppBar>
    </Grid>
  );
}

const useStyles = makeStyles({
  icon: {
    height: "100%",
  },
  navItem: {
    padding: "0px 10px",
  },
  toolbar: {
    height: "54px",
    minHeight: "54px", // overriding mui's minHeight of 64px
    padding: "10px",
    backgroundColor: "black",
  },
  links: {
    flexGrow: "1",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
    "&:visited": {
      color: "white",
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
