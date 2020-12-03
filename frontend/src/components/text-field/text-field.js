import React from 'react';
import { TextField as Field } from '@material-ui/core';

import { useTextFieldStyles } from './use-text-feld-styles';

export const TextField = ({ label, errors, input, touched }) => {
  const classes = useTextFieldStyles();

  return (
    <Field
      className={classes.root}
      label={label}
      helperText={touched[input.name] && errors[input.name] ? errors[input.name] : null}
      {...input}
    />
  );
};
