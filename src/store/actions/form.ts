import { CHANGE_INPUT_VALUE, CLEAR_FORM } from "../constants/form";

interface TCangeInputValue {
  readonly type: typeof CHANGE_INPUT_VALUE,
  input: string,
  value: string
}

interface TClearForm {
  readonly type: typeof CLEAR_FORM
}

export type TFormActions = TCangeInputValue | TClearForm;