import React, { ChangeEvent, memo, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';

const useStyles = makeStyles((theme: Theme) => ({
  radioGroup: {
    margin: `10px 0`,
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  box: {
    display: 'flex',
  },
}));

export type ControlRadio = {
  value: string;
  label: string;
};

export type Props = {
  initialValue: string;
  name: string;
  controls: Array<ControlRadio>;
  label?: string;
  onChangeFromField?: (event: ChangeEvent<{ value: any }>) => void;
  error?: string;
  fullWidth?: boolean;
};

/**
 * @param initialValue LogicalValues.Yes
 * @param controls [{ value: LogicalValues.Yes, label: 'YES' }, { value: LogicalValues.No, label: 'NO' }]
 * @param name field name
 */
function RadioButton({
  initialValue,
  name,
  label,
  controls,
  fullWidth,
  onChangeFromField,
  error,
}: Props) {
  const classes = useStyles();
  const [value, setValue] = useState(initialValue);

  const onChangeEvent = (event: ChangeEvent<{ value: any }>) => {
    const { value } = event.target;
    setValue(value as string);
    onChangeFromField && onChangeFromField(event);
  };

  return (
    <FormControl fullWidth={fullWidth} className={classes.box}>
      <InputLabel htmlFor={name} shrink>
        {label}
      </InputLabel>
      <RadioGroup
        className={classes.radioGroup}
        name={name}
        value={value}
        onChange={onChangeEvent}
      >
        {controls.map((control) => (
          <FormControlLabel
            key={control.value}
            value={control.value}
            control={<Radio color="primary" />}
            label={control.label}
          />
        ))}
      </RadioGroup>
      {error && <FormHelperText error>{error}</FormHelperText>}
    </FormControl>
  );
}

export default memo(RadioButton);
