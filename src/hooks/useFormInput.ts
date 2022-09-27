import { ChangeEvent, useState } from 'react';

export function useFormInput(initialValue = '') {
  const [value, setValue] = useState(initialValue);

  function handleChange(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    setValue(e.target.value);
  }

  return { value, onChange: handleChange };
}
