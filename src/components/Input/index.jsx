import React, { useEffect, useRef } from 'react';
import ReactInputMask from 'react-input-mask';

import { useField } from '@unform/core';


const Input = ({ name, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    });
  }, [fieldName, registerField]);

  return <ReactInputMask ref={inputRef} defaultValue={defaultValue} {...rest} />
}

export default Input;