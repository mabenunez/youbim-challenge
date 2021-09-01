import React from 'react';
import RadioButton, { Props } from 'components/RadioButton/RadioButton';
import { FieldAttributes, useField } from 'formik';

type ComponentProps = Props & FieldAttributes<{}>;

function FormikRadioButton({
  initialValue,
  controls,
  ...rest
}: ComponentProps) {
  const [field, meta] = useField<any>({ ...rest });
  const { error, touched } = meta;
  const { name, value, onChange } = field;

  return (
    <RadioButton
      error={touched && error ? error : undefined}
      initialValue={value}
      controls={controls}
      //@ts-ignore
      name={name}
      onChangeFromField={onChange}
      {...rest}
    />
  );
}

export default FormikRadioButton;