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
    padding: "0px 15px",
    margin: "30px",
    textDecoration: "none",
    backgroundColor: "dodgerblue",
    borderRadius: "2em",
    "&:hover": {
      backgroundColor: "lightskyblue",
    },
  },
  text: {
    padding: "10px",
    color: "black",
  },
});

export default Donate;
