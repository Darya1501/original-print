import { ChangeEvent, useState } from "react";
import { CHANGE_INPUT_VALUE } from "../store/constants/form";
import { useDispatch } from "./store-hooks";
import { useValidation } from "./use-validation";

type TValidations = {
  [validation: string]: any
}

export function useInput(inputValue: string, validations: TValidations) {
  const [value, setValue] = useState(inputValue);
  const [isVisited, setIsVisited] = useState(false);
  const valid = useValidation(value, validations)

  const dispatch = useDispatch()

  const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const {value, name} = event.target;
    setValue(value)
    dispatch({ type: CHANGE_INPUT_VALUE, input: name, value: value})
  };

  const handleBlur = () => {
    setIsVisited(true)
  }

  return {value, isVisited, handleChange, handleBlur, ...valid};
}