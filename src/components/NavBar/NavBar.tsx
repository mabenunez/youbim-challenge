import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  menu: {
    display: "flex",
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 21, 41, 1)'
  },
  menuItems: {
    color: 'white'
  }
}));

function NavBar() {
  const classes = useStyles();
  return (
    <header>
      <MenuList className={classes.menu}>
        <MenuItem className={classes.menuItems}>Create Items</MenuItem>
        <MenuItem className={classes.menuItems}>Create Bundle</MenuItem>
        <MenuItem className={classes.menuItems}>Released Bundles</MenuItem>
      </MenuList>
    </header>
  );
}

export default NavBar;
