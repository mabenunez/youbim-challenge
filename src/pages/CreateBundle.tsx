import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ItemCard from "components/ItemCard/ItemCard";
import Typography from "@material-ui/core/Typography";
import { ItemsContext } from "providers/ItemProvider";

const useStyles = makeStyles((theme) => ({
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
  acceptButton: {
    margin: '10px'
  }
}));

function CreateBundle() {
  const classes = useStyles();
  const itemsState = useContext(ItemsContext);

  const addToBundle = (id: number) => {
    console.log("add to bundle", id);
  };

  const onDelete = (id: number) => {
    console.log("delete", id);
  };

  return (
    <Paper square elevation={0} className={classes.paper}>
      <Grid container>
        <Grid item lg={6} md={6} sm={12} className={classes.section}>
          <Typography className={classes.title}>Available Items</Typography>
          <Grid container>
          {itemsState.items.length > 0 &&
            itemsState.items.map((item) => {
              return (
                <ItemCard
                  cardTitle={item.code.toUpperCase()}
                  addToBundle={() => addToBundle(item.id)}
                  info={item.description}
                  price={item.price}
                  type={item.type}
                  key={item.id}
                >
                </ItemCard>
              );
            })}
          </Grid>
        </Grid>
        <Grid item lg={6} md={6} sm={12} className={classes.section}>
          <Typography className={classes.title}>Currently Bundled</Typography>
          {itemsState.items.length > 0 &&
            itemsState.items.map((item) => {
              return (
                <ItemCard
                  cardTitle={item.code.toUpperCase()}
                  onDelete={() => onDelete(item.id)}
                  info={item.description}
                  price={item.price}
                  type={item.type}
                  key={item.id}
                >
                </ItemCard>
              );
            })}
          <input type= "text" placeholder='Bundle Name'></input>
          <Button color="primary" variant="contained" className={classes.acceptButton}>
            Accept Bundle
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default CreateBundle;
