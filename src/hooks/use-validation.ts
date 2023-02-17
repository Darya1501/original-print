import { useEffect, useState } from 'react';

type TValidations = {
  [validation: string]: any
}

export const useValidation = (value: string, validations: TValidations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLength, setMinLength] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength': {
          value.length < validations[validation] ? setMinLength(true) : setMinLength(false);
          break;
        }
        case 'isEmpty': {
          value ? setEmpty(false) : setEmpty(true);
          break;
        }
      }
    }
  }, [value, validations])

  return {
    isEmpty, minLength
  }
}