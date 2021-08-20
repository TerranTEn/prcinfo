import { Grid, makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import Download from "./Download";
import MoshCard from "./MoshCard";
import MoshImage1 from "../images/MoshCard1.png";
import MoshImage2 from "../images/MoshCard2.png";

const cardInfo = [
  {
    title: "Super Easy to Use",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam obcaecati vel ad unde est illo at. Labore excepturi officia dolores!",
    image: MoshImage1,
    alt: "easy",
    orientationLeft: false,
  },
  {
    title: "Simply Fast Websites",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam obcaecati vel ad unde est illo at. Labore excepturi officia dolores!",
    image: MoshImage2,
    alt: "",
    orientationLeft: true,
  },
  {
    title: "Wordpress Made Easy",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam obcaecati vel ad unde est illo at. Labore excepturi officia dolores!",
    image: MoshImage1,
    alt: "",
    orientationLeft: false,
  },
  {
    title: "24/7 Expert Support",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam obcaecati vel ad unde est illo at. Labore excepturi officia dolores!",
    image: MoshImage2,
    alt: "",
    orientationLeft: true,
  },
];

function About() {
  const classes = useStyles();
  return (
    <Grid container xs={12} id="about-section">
      <Grid className={classes.root} container item xs={12} spacing={5}>
        <Grid item xs={12}>
          <Typography variant="h2" color="textPrimary">
            About
          </Typography>
        </Grid>
        {cardInfo.map((c) => (
          <MoshCard
            title={c.title}
            description={c.description}
            image={c.image}
            alt={c.alt}
            orientationLeft={c.orientationLeft}
          />
        ))}

        <Grid item xs={12}>
          <Download prompt="Free Download:" />
        </Grid>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles({
  root: {
    maxWidth: 1160,
    margin: "auto",
  },
});

export default About;
