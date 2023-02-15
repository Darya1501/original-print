import { TFormActions } from "../actions/form"
import { CHANGE_INPUT_VALUE, CLEAR_FORM } from "../constants/form";

type TFormState ={
  [name: string]: string;
}

const initialFormState: TFormState = {
  name: '',
  phone: '',
  address: '',
  comment: ''
}

export const formReducer = (state = initialFormState, action: TFormActions): TFormState=> {
  switch (action.type) {
    case CHANGE_INPUT_VALUE: {
      return {
        ...state,
        [action.input]: action.value
      }
    }
    case CLEAR_FORM: {
      return initialFormState
    }
    default: {
      return state
    }
  }
}