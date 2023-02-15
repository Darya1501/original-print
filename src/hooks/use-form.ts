import { ChangeEvent, useState } from "react";
import { CHANGE_INPUT_VALUE } from "../store/constants/form";
import { useDispatch } from "./store-hooks";

type TUseFormProps = {
  [name: string]: any
}

export function useForm(inputValues: TUseFormProps) {
  const [values, setValues] = useState(inputValues);
  const dispatch = useDispatch()

  const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const {value, name} = event.target;
    setValues({ ...values, [name]: value });
    dispatch({ type: CHANGE_INPUT_VALUE, input: name, value: value})
  };
  return {values, handleChange, setValues};
}