import React from 'react';
import { useField, FieldAttributes } from 'formik';
import { InputLabel, TextField } from '@material-ui/core';

type TextFieldProps = {
  label: string;
  disabled?: boolean;
  fullWidth: boolean;
} & FieldAttributes<{}>;

// Tutorial from https://www.youtube.com/watch?v=FD50LPJ6bjE&ab_channel=BenAwad
const CustomTextField: React.FC<TextFieldProps> = ({
  placeholder,
  className,
  autoFocus,
  type,
  disabled,
  onBlur,
  label,
  fullWidth,
  ...props
}) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error && meta.touched ? meta.error : '';

  return (
    <>
      <InputLabel htmlFor={field.name} shrink error={Boolean(errorText)}>
        {label}
      </InputLabel>
      <TextField
        placeholder={placeholder}
        {...field}
        inputProps={{
          //@ts-ignore
          onBlur: onBlur,
        }}
        disabled={disabled}
        autoFocus={autoFocus}
        helperText={errorText}
        error={!!errorText}
        className={className}
        type={type}
        {...props}
      />
    </>
  );
};

export default CustomTextField;
