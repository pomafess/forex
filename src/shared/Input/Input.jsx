import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import { StyledInput } from './styles';

export const Input = ({
  labelText,
  name,
  value,
  type = 'text',
  id,
  inputProps,
  onChange,
  placeholder
}) => {
  return (
    <>
      <FormControl
        style={{ width: '100%', marginRight: 16 }}
        variant='standard'
      >
        {labelText ? (
          <InputLabel shrink style={{ color: '#1E1E1E' }} htmlFor={id}>
            {labelText}
          </InputLabel>
        ) : null}
        <StyledInput
          placeholder={placeholder}
          onChange={onChange}
          inputProps={inputProps}
          type={type}
          name={name}
          value={value}
          id={id}
        />
      </FormControl>
    </>
  );
};