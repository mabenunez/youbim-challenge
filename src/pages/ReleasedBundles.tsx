import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles, Theme } from "@material-ui/core/styles";
import ItemCard from "components/ItemCard/ItemCard";
import Typography from "@material-ui/core/Typography";
import { ItemsContext } from "providers/ItemProvider";

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    margin: "20px",
    padding: "20px",
  },
  section: {
    padding: "10px",
  },
  title: {
    margin: "0 10px 10px 10px",
    fontWeight: "bold",
    color: "rgb(45 45 45)",
  },
  formField: {
    marginBottom: "20px",
  },
  radioButtons: {
    display: "flex",
    flexDirection: "row",
  },
}));

function ReleaseBundles() {
  const classes = useStyles();
  const bundleState = useContext(ItemsContext);

  return (
    <Paper square elevation={0} className={classes.paper}>
      <Grid>
          <Typography className={classes.title}>Available Items</Typography>
        
      </Grid>
    </Paper>
  );
}

export default ReleaseBundles;

