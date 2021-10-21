import Grid from "@material-ui/core/Grid";

import Splash from "./Splash";
import About from "./About";
import Mission from "./Mission";

function Home() {
  return (
    <Grid item container>
      <Splash />
      <Mission />
      <About />
    </Grid>
  );
}

export default Home;
