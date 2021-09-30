import { Typography, makeStyles } from "@material-ui/core";

function MoshCard({ text, href }) {
  const classes = useStyles();

  return (
    <a className={classes.root} href={href}>
      <Typography variant="h4" color="Primary">
        {text}
      </Typography>
    </a>
  );
}
const useStyles = makeStyles({
  root: {
    display: "flex",
    width: "100%",
    padding: "0.75rem 2rem",
    textDecoration: "none",
    backgroundColor: "dodgerBlue",
  },
});

export default MoshCard;
