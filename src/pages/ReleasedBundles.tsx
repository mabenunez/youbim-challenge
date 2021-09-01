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
  bundle: {
    margin: '25px 0'
  },
  title: {
    margin: "0 10px 10px 10px",
    fontWeight: "bold",
    color: "rgb(45 45 45)",
  },
}));

function ReleaseBundles() {
  const classes = useStyles();
  const bundleState = useContext(ItemsContext);

  const onDelete = (id: number) => {
    bundleState.deleteBundle(id)
  };

  return (
    <Paper square elevation={0} className={classes.paper}>
      <Typography className={classes.title}>Currently Bundled</Typography>
      {bundleState.bundles.length > 0 &&
        bundleState.bundles.map((bundle) => {
          return (
            <article key={bundle.id} className={classes.bundle}>
              <Grid container justify="space-between" alignItems="center">
                <Grid item>
                  <Typography className={classes.title}>
                    {bundle.name}
                  </Typography>
                  <Typography className={classes.title}>
                  </Typography>
                </Grid>
                <Grid item>
                  <Button color="primary">Print</Button>
                  <Button
                    color="secondary"
                    variant="contained"
                    size="small"
                    disableElevation
                    onClick={() => onDelete(bundle.id)}
                  >
                    Delete
                  </Button>
                </Grid>
              </Grid>
              {bundle.itemsBundled.length > 0 &&
                bundle.itemsBundled.map((item) => {
                  return (
                    <ItemCard
                      key={item.id}
                      cardTitle={item.code.toUpperCase()}
                      info={item.description}
                      price={item.price}
                      type={item.type}
                    ></ItemCard>
                  );
                })}
            </article>
          );
        })}
    </Paper>
  );
}

export default ReleaseBundles;
