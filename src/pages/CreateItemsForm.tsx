import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { TypeOptions } from "providers/ItemProvider";
import { Field, FormikProps, Formik } from "formik";
import * as yup from "yup";
import CustomTextField from "components/FormikWrapperFields/CustomTextField";
import FormikRadioButton from "components/FormikWrapperFields/FormikRadioButton";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  formField: {
    marginBottom: "20px",
    width: '100%',
  },
  radioButtons: {
    display: "flex",
    flexDirection: "row",
  },
}));

export enum FieldNames {
  code = "code",
  description = "description",
  price = "price",
  type = "type",
}

export type FormFields = {
  [FieldNames.code]: string;
  [FieldNames.description]: string;
  [FieldNames.price]: number;
  [FieldNames.type]: TypeOptions.single | TypeOptions.multiple;
};

type Props = {
  formValues: FormFields;
  handleSubmit: (formValues: FormFields) => void;
};

export const NUMERIC_REGEX = /^[0-9.\s]+$/;
const MAX_LENGTH = 14;

const validationSchema = yup.object().shape({
  [FieldNames.code]: yup
    .string()
    .required("Required field")
    .max(MAX_LENGTH, `Max length is ${MAX_LENGTH} characters`),
  [FieldNames.description]: yup.string().required("Required field"),
  [FieldNames.price]: yup.string().matches(NUMERIC_REGEX, {
    message: "Only positive numbers",
    excludeEmptyString: true,
  }),
});

function CreateItemsForm(props: Props) {
  const { handleSubmit, formValues } = props;
  const classes = useStyles();

  return (
    <Formik
      initialValues={formValues}
      validationSchema={validationSchema}
      onSubmit={(formValues: FormFields) => handleSubmit(formValues)}
    >
      {({ handleSubmit, isValid }: FormikProps<FormFields>) => {
        return (
          <form onSubmit={handleSubmit}>
            <Field
              className={classes.formField}
              id={FieldNames.code}
              name={FieldNames.code}
              label="Code"
              variant="outlined"
              fullWidth
              as={CustomTextField}
            />
            <Field
              className={classes.formField}
              id={FieldNames.description}
              name={FieldNames.description}
              label="Description"
              variant="outlined"
              rows={5}
              fullWidth
              as={CustomTextField}
            />
            <Field
              className={classes.formField}
              id={FieldNames.price}
              name={FieldNames.price}
              label="Price"
              variant="outlined"
              as={CustomTextField}
            />
            <Field
              className={classes.radioButtons}
              id={FieldNames.type}
              name={FieldNames.type}
              label="Type"
              fullWidth
              controls={[
                { value: TypeOptions.single, label: 'Single' },
                { value: TypeOptions.multiple, label: 'Multiple' }
              ]}
              as={FormikRadioButton}
            />
            <Button
              color="primary"
              variant="contained"
              type="submit"
              onClick={() => handleSubmit}
              disabled={!isValid}
            >
              Create Item
            </Button>
          </form>
        );
      }}
    </Formik>
  );
}

export default CreateItemsForm;
