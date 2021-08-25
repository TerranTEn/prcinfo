import Typography from "@material-ui/core/Typography";
import { makeStyles, Button } from "@material-ui/core";

function Donate() {
  const classes = useStyles();

  const redirect = (targetURL) => {
    window.Location.href = targetURL;
  };
  return (
    <div className={classes.root}>
      <a className={classes.link} href="about-section">
        <Typography variant="h6">Upcoming events</Typography>
      </a>
      <Button
        className={classes.button}
        onClick={() =>
          redirect(
            "https://donate.wikimedia.org/w/index.php?title=Special:LandingPage&country=US&uselang=en&utm_medium=spontaneous&utm_source=fr-redir&utm_campaign=spontaneous"
          )
        }
        variant="outlined"
        color="secondary"
      >
        App Store
      </Button>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    width: "20%",
    height: "5%",
    display: "flex",
    flexDirection: "row",
    position: "static",
    top: "-80%",
    left: "-80%",
    backgroundColor: "black",
  },
  link: {
    width: "50%",
    textDecoration: "none",
    color: "white",
    "&:hover": {
      color: "dodgerblue",
    },
  },
});

export default Donate;
