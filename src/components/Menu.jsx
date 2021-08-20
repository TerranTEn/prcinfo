import React from "react";
import { IconButton, Menu as MuiMenu, MenuItem } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";

function Menu({ className }) {
  const [anchorElement, setAnchorElement] = React.useState(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleClick = (event) => {
    setAnchorElement(event.target);
    setIsMenuOpen(true);
  };

  const handleClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={className}>
      <IconButton
        aria-label="Open menu"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon color="inherit" />
      </IconButton>
      <MuiMenu
        id="simple-menu"
        anchorEl={anchorElement}
        open={isMenuOpen}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>About</MenuItem>
        <MenuItem onClick={handleClose}>Blog</MenuItem>
        <MenuItem onClick={handleClose}>Contact</MenuItem>
      </MuiMenu>
    </div>
  );
}

export default Menu;
