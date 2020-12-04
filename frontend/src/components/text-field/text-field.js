import React from 'react';
import { TextField as Field } from '@material-ui/core';

import { useTextFieldStyles } from './use-text-feld-styles';

export const TextField = ({ label, errors, input, touched, disabled = false, ...rest }) => {
  const classes = useTextFieldStyles();

  return (
    <Field
      className={classes.root}
      label={label}
      disabled={disabled}
      helperText={errors && touched[input.name] && errors[input.name] ? errors[input.name] : null}
      {...input}
      {...rest}
    />
  );
};
