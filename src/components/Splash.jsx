import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";

import Download from "./Download";
import BgImage from "../images/DRCImage.png";

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
        <Typography
          className={classes.header}
          color="textSecondary"
          variant="h1"
        >
          Portneuf Resource Council
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          className={classes.smallHeader}
          color="textPrimary"
          variant="h5"
        >
          People organizing for a prosperous and healthy Southern Idaho since
          1978
        </Typography>
      </Grid>
      <Grid item>
        <Download prompt="Download Free:" />
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
  header: {
    padding: "25vh 0px 15px 0px",
  },
  smallHeader: {
    maxWidth: 480,
  },
  background: {
    backgroundImage: `url(${BgImage})`,
    opacity: 0.7,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: -1,
  },
});

export default Splash;
