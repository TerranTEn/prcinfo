import { IconButton } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";

function Hamburger(props) {
  return (
    <div className={props.className}>
      <IconButton
        aria-label="Open menu"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={() => props.setOpen(!props.open)}
      >
        <MenuIcon color="accent" />
      </IconButton>
    </div>
  );
}

export default Hamburger;
