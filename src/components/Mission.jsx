import { Typography, makeStyles, useTheme } from "@material-ui/core";

function Mission() {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <div className={classes.root}>
      <Typography gutterBottom="true" variant="h2">
        The Mission of Portneuf Resource Council
      </Typography>
      <Typography className={classes.subHeader} variant="h5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Typography>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    padding: "7% 0",
    backgroundColor: (theme) => theme.palette.secondary.main,
    color: (theme) => theme.palette.textPrimary.light,
  },
  subHeader: {
    width: "90%",
    margin: "auto",
    color: (theme) => theme.palette.textPrimary.light,
  },
}));
export default Mission;
