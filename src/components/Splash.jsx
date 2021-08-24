import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";

import BgImage from "../images/DRCImage.png";
import PRCtext from "../images/PRCtext-white.png";

function Splash() {
  const classes = useStyles();

  return (
    <Grid
      item
      container
      className={classes.root}
      direction="column"
      alignItems="center"
    >
      <Grid item alignContent="center">
        <img
          src={PRCtext}
          className={classes.headerText}
          alt="Portneuf Resource Council"
        />
      </Grid>
      <Grid item>
        <Typography
          className={classes.smallHeader}
          color="Primary"
          variant="h5"
        >
          People organizing for a prosperous and healthy Southern Idaho since
          1978
        </Typography>
      </Grid>

      <div className={classes.background}></div>
    </Grid>
  );
}

const useStyles = makeStyles({
  root: {
    minHeight: "96vh",
    textAlign: "center",
    backgroundColor: "black",
    zIndex: -2,
  },

  headerText: {
    maxHeight: "25vh",
    padding: "23vh 0px 10vh 0px",
  },
  smallHeader: {
    maxWidth: 480,
    color: "white",
  },
  background: {
    backgroundImage: `url(${BgImage})`,
    opacity: 0.6,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: "-4vh",
    left: 0,
    zIndex: -1,
  },
});

export default Splash;
