import React from "react";
import { Grid, makeStyles, Theme } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { TypeOptions } from "providers/ItemProvider";

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    margin: "0 10px 10px 10px",
    padding: "0 10px",
    width: "100%",
    boxSizing: "border-box",
  },
  actionBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "solid 1px #cecece",
    padding: "10px 0 10px 0",
    boxSizing: "border-box",
  },
  title: {
    fontWeight: "bold",
    fontSize: "15px",
    color: "rgb(93 93 93)",
  },
  info: {
    fontSize: "14px",
    color: "rgb(99 99 99)",
  },
  subtitle: {
    fontSize: "14px",
    fontWeight: "bold",
    margin: "10px",
    color: "rgb(93 93 93)",
  },
}));

type Props = {
  cardTitle: string;
  info: string;
  price: number;
  type: TypeOptions;
  children?: any;
  // onDelete?: (id: string) => void;
  onDelete?: any;
  // addToBundle?: (id: string) => void;
  addToBundle?: any;
};

function ItemCard(props: Props) {
  const classes = useStyles();
  const { cardTitle, info, children, onDelete, addToBundle, price, type } =
    props;

  return (
    <Card variant="outlined" className={classes.card}>
      <div className={classes.actionBar}>
        <Typography className={classes.title}>{cardTitle}</Typography>
        <CardActions>
          {onDelete && (
            <Button
              color="secondary"
              variant="contained"
              size="small"
              disableElevation
              onClick={onDelete}
            >
              Delete
            </Button>
          )}
          {addToBundle && (
            <Button
              variant="outlined"
              size="small"
              disableElevation
              onClick={addToBundle}
            >
              Add to Bundle
            </Button>
          )}
        </CardActions>
      </div>
      <CardContent className={classes.info}>
        <Grid container direction={"column"}>
          <Grid item>{info}</Grid>
          <Grid item>${price}</Grid>
          <Grid item>{type}</Grid>
        </Grid>
      </CardContent>
      {children && (
        <>
          <Typography className={classes.subtitle}>Sub-items</Typography>
          {children}
        </>
      )}
    </Card>
  );
}

export default ItemCard;
