import { TCartProduct } from "../../utils/types"
import { TCartActions } from "../actions/cart"
import { ADD_PRODUCT_TO_CART, CLEAR_CART, DECREMENT_PRODUCT_COUNT, INCREMENT_PRODUCT_COUNT, REMOVE_PRODUCT_FROM_CART } from "../constants/cart"

type TCartState = {
  products: Array<TCartProduct>
}
const initialCartState: TCartState = {
  products: []
}

export const cartReducer = (state = initialCartState, action: TCartActions): TCartState => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART: {
      return {
        ...state,
        products: [
          ...state.products,
          {
            ...action.product,
            count: 1
          }
        ]
      }
    }
    case REMOVE_PRODUCT_FROM_CART: {
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.id)
      }
    }
    case INCREMENT_PRODUCT_COUNT: {
      return {
        ...state,
        products: state.products.map(product => product.id === action.id ? { ...product, count: product.count + 1 } : product)
      }
    }
    case DECREMENT_PRODUCT_COUNT: {
      return {
        ...state,
        products: state.products.map(product => product.id === action.id ? { ...product, count: product.count - 1 } : product)
      }
    }
    case CLEAR_CART: {
      return {
        ...initialCartState
      }
    }
    default: {
      return {
        ...initialCartState
      }
    }
  }
}