import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";

import Download from "./Download";

function Splash() {
  const classes = useStyles();

  return (
    <Grid container item xs={12}>
      <Grid className={classes.root} container item xs={12} spacing={5}>
        <Grid item xs={12}>
          <Typography
            className={classes.header}
            color="textPrimary"
            variant="h1"
          >
            Be kind to your mind
          </Typography>
        </Grid>
        <Grid className={classes.smallHeader} item xs={12}>
          <Typography color="textPrimary" variant="h6">
            Less stressed. More resilient. Happier. It all starts with just a
            few minutes a day.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Download prompt="Download Free:" />
        </Grid>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles({
  root: {
    maxWidth: 1160,
    margin: "auto",
    paddingTop: "10%",
    paddingBottom: "10%",
  },
  header: {
    maxWidth: 720,
  },
  smallHeader: {
    maxWidth: 480,
  },
});

export default Splash;
