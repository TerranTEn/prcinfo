import { makeStyles } from "@material-ui/core";

import MenuItem from "./MenuItem";

const menuItems = [
  { text: "Home", href: "www.google.com" },
  { text: "About", href: "www.google.com" },
  { text: "Campaigns", href: "www.google.com" },
  { text: "News", href: "www.google.com" },
  { text: "Events", href: "www.google.com" },
];

function Menu({ open }) {
  const classes = useStyles(open);

  return (
    <div className={classes.Menu}>
      {menuItems.map((c) => (
        <MenuItem text={c.text} href={c.href} />
      ))}
    </div>
  );
}

const useStyles = makeStyles({
  Menu: {
    height: "fit-content",
    position: "fixed",
    top: "10vh", // Height of AppBar
    left: "0px",
    bottom: "0px",
    right: "0px",
    display: (open) => (open ? "" : "none"),
  },
});

export default Menu;
