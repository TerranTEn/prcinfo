import { Grid } from "@material-ui/core";

import AppBar from "./components/AppBar";
import Splash from "./components/Splash";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <Grid container>
      <AppBar appTitle="Portneuf Resource Council" />
      <Splash />
      <About />
      <Footer />
    </Grid>
  );
}

export default App;
