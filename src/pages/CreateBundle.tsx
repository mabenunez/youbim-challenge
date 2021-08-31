import React, { ChangeEvent } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ItemCard from "components/ItemCard/ItemCard";
// import { Item } from "providers/ItemProvider";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: "20px",
    padding: "20px",
  },
  section: {
    padding: "10px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  formField: {
    marginBottom: "20px",
  },
  radioButtons: {
    display: "flex",
    flexDirection: "row",
  },
}));

function CreateBundle() {
  const classes = useStyles();
  const [value, setValue] = React.useState("single");

  const handleChange = (event: ChangeEvent<{ value: any }>) => {
    setValue(event.target.value);
  };

  return (
    <Paper square elevation={0} className={classes.paper}>
      <Grid container>
        <Grid item lg={6} md={6} sm={12} className={classes.section}>
          <form className={classes.form}>
            <TextField
              id="code"
              label="Code"
              variant="outlined"
              className={classes.formField}
              fullWidth
            />
            <TextField
              id="description"
              label="Description"
              variant="outlined"
              multiline
              maxRows={8}
              className={classes.formField}
              fullWidth
            />
            <TextField
              id="price"
              label="Price"
              variant="outlined"
              className={classes.formField}
              fullWidth
            />
            <FormControl component="fieldset" className={classes.formField}>
              <FormLabel component="legend">Type</FormLabel>
              <RadioGroup
                name="type"
                value={value}
                onChange={handleChange}
                className={classes.radioButtons}
              >
                <FormControlLabel
                  value="single"
                  control={<Radio />}
                  label="Single"
                />
                <FormControlLabel
                  value="multiple"
                  control={<Radio />}
                  label="Multiple"
                />
              </RadioGroup>
            </FormControl>
            <TextField
              id="order"
              label="Order"
              variant="outlined"
              className={classes.formField}
            />
            <Button color="primary" variant="contained">
              Create Item
            </Button>
          </form>
        </Grid>
        <Grid item lg={6} md={6} sm={12} className={classes.section}>
          <ItemCard
            cardTitle={"CODE89877"}
            onDelete={() => console.log("delete")}
            info={"kjdnckasjdnckasjdnckajdnckajsdnckajdnckajdnckajncd"}
          >
            <ItemCard
              cardTitle={"CODE89877"}
              onDelete={() => console.log("delete")}
              info={
                "SUBITEM kjdnckasjdnckasjdnckajdnckajsdnckajdnckajdnckajncd"
              }
            ></ItemCard>
          </ItemCard>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default CreateBundle;
