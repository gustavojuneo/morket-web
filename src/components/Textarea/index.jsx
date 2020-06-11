import React, { useEffect, useRef } from 'react';

import { useField } from '@unform/core';

const Textarea = ({ name, ...rest }) => {
  const textareaRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textareaRef.current,
      path: 'value'
    });
  }, [fieldName, registerField]);

  return <textarea ref={textareaRef} defaultValue={defaultValue} {...rest} />
}

export default Textarea;