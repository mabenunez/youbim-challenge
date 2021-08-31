import React from "react";
import { makeStyles, Theme } from '@material-ui/core';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    margin: "0 10px 10px 10px",
    padding: "10px",
  },
  actionBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "solid 1px #cecece",
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
  subtitle:{
    fontSize: "14px",
    fontWeight: "bold",
    margin: '10px',
    color: "rgb(93 93 93)",
  }
}));

type Props = {
  cardTitle: string;
  info: string;
  children?: any;
  onDelete: (id: string) => void; //delete or add to bundle
};
function ItemCard(props: Props) {
  const classes = useStyles();
  const { cardTitle, info, children } = props;

  return (
    <Card variant="outlined" className={classes.card}>
      <div className={classes.actionBar}>
        <Typography className={classes.title}>{cardTitle}</Typography>
        <CardActions>
          <Button color="secondary" variant="contained" size="small" disableElevation>Delete</Button>
        </CardActions>
      </div>
      <CardContent className={classes.info}>{info}</CardContent>
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
