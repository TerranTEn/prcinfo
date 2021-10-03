import { makeStyles } from "@material-ui/core";

import MenuItem from "./MenuItem";

const menuItemData = [
  { text: "Home", href: "www.google.com" },
  { text: "About", href: "www.google.com" },
  { text: "Campaigns", href: "www.google.com" },
  { text: "News", href: "www.google.com" },
  { text: "Events", href: "www.google.com" },
];

function Menu(props) {
  const classes = useStyles(props);

  return (
    <div className={classes.Menu}>
      {menuItemData.map((c) => (
        <div>
          <MenuItem text={c.text} href={c.href} />
        </div>
      ))}
    </div>
  );
}

const useStyles = makeStyles({
  Menu: {
    height: "fit-content",
    position: "fixed",
    top: (props) => props.height, // Height of AppBar
    left: "0px",
    bottom: "0px",
    right: "0px",
    display: (props) => (props.open ? "" : "none"),
  },
});

export default Menu;
