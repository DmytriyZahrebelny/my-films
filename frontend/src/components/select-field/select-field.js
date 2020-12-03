import React, { useEffect, useState } from 'react';
import { Select } from '@material-ui/core';

import { useSelectFieldStyles } from './use-select-field-styles';

export const SelectField = ({ options = [], defaultValue, setValue, multiple = false, name }) => {
  const classes = useSelectFieldStyles();
  const [state, setState] = useState(multiple ? [] : defaultValue);

  const handleSelect = (evt) => {
    setValue(name, evt.target.value);
    setState(evt.target.value);
  };

  useEffect(() => {
    setValue(name, multiple ? [] : defaultValue);
  }, []);

  return (
    <Select value={state} onChange={handleSelect} className={classes.select} multiple={multiple}>
      {options.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </Select>
  );
};
