import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import { Switch, Route, Link } from "react-router-dom";
import ReleasedBundles from "pages/ReleasedBundles";
import CreateBundle from "pages/CreateBundle";
import CreateItems from "pages/CreateItems";

const useStyles = makeStyles((theme) => ({
  menu: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "rgba(0, 21, 41, 1)",
  },
  menuLinks: {
    textDecoration: "none",
    color: "white",
  },
}));

function NavBar() {
  const classes = useStyles();
  return (
    <header>
      <MenuList className={classes.menu}>
        <MenuItem>
          <Link className={classes.menuLinks} to="/">
            Create Items
          </Link>
        </MenuItem>
        <MenuItem>
          <Link className={classes.menuLinks} to="/create-bundle">
            Create Bundle
          </Link>
        </MenuItem>
        <MenuItem>
          <Link className={classes.menuLinks} to="/released-bundles">
            Released Bundles
          </Link>
        </MenuItem>
      </MenuList>
      <Switch>
        <Route exact path="/released-bundles">
          <ReleasedBundles />
        </Route>
        <Route exact path="/create-bundle">
          <CreateBundle />
        </Route>
        <Route exact path="/">
          <CreateItems />
        </Route>
      </Switch>
    </header>
  );
}

export default NavBar;
