import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

function Donate() {
  const classes = useStyles();

  return (
    <a className={classes.root} href="www.google.com" alt="Donate!">
      <Typography className={classes.text} variant="h6">
        Donate
      </Typography>
    </a>
  );
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignContent: "Center",
    padding: "0px 0.5rem",
    marginLeft: "15px",
    textDecoration: "none",
    backgroundColor: "dodgerblue",
    borderRadius: "2em",
    "&:hover": {
      backgroundColor: "lightskyblue",
    },
  },
  text: {
    padding: "0.5rem",
    color: "black",
  },
});

export default Donate;
