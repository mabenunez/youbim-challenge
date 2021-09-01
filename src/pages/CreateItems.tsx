import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ItemCard from "components/ItemCard/ItemCard";
import { Item, ItemsContext, TypeOptions } from "providers/ItemProvider";
import CreateItemsForm, { FieldNames, FormFields } from "pages/CreateItemsForm";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: "20px",
    padding: "20px",
  },
  section: {
    padding: "10px",
  },
}));

const initialFormValues = {
  [FieldNames.code]: "",
  [FieldNames.description]: "",
  [FieldNames.price]: 0,
  [FieldNames.type]: TypeOptions.single,
};

function CreateItems() {
  const classes = useStyles();
  const itemsState = useContext(ItemsContext);

  const onDelete = (id: number) => {
    itemsState.deleteItem(id)
  };

  const handleSubmit = (formValues: FormFields) => {
    const newItem: Item = {
      code: formValues.code,
      description: formValues.description,
      price: formValues.price as number,
      type: formValues.type,
      order: 0,
      firstLevel: true,
      parent: undefined,
      id: Math.floor(Math.random() * 100),
    };

    itemsState.setItems(newItem);
  };
  return (
    <Paper square elevation={0} className={classes.paper}>
      <Grid container>
        <Grid item lg={6} md={6} sm={12} className={classes.section}>
          <CreateItemsForm
            formValues={initialFormValues}
            handleSubmit={handleSubmit}
          />
        </Grid>
        <Grid item lg={6} md={6} sm={12} className={classes.section}>
          {itemsState.items.length > 0 &&
            itemsState.items.map((item) => {
              return (
                <ItemCard
                  key={item.id}
                  cardTitle={item.code.toUpperCase()}
                  onDelete={() => onDelete(item.id)}
                  info={item.description}
                  price={item.price}
                  type={item.type}
                >
                  {/* {item.firstLevel &&} */}
                </ItemCard>
              );
            })}
        </Grid>
      </Grid>
    </Paper>
  );
}

export default CreateItems;
