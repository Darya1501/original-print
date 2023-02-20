import { TProduct } from "../../utils/types"
import { TProductsActions } from "../actions/products"
import { ADD_UNUSUAL_PRODUCTS, GET_PRODUCTS_FAILED, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "../constants/products"

type TProductsState = {
  products: Array<TProduct>,
  unusualProducts: Array<TProduct>,

  isProductsRequest: boolean,
  isProductsSuccess: boolean,
  isProductsFailed: boolean
}

export const initialProductsState: TProductsState = {
  isProductsRequest: false,
  isProductsSuccess: false,
  isProductsFailed: false,

  products: [],
  unusualProducts: []
}

export const productsReducer = (state = initialProductsState, action: TProductsActions): TProductsState => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST: {
      return {
        ...state,
        isProductsRequest: true,
        isProductsSuccess: false,
        isProductsFailed: false,
      }
    }
    case GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        isProductsRequest: false, 
        isProductsSuccess: true,
        isProductsFailed: false,
        products: action.products
      }
    }
    case GET_PRODUCTS_FAILED: {
      return {
        ...state,
        isProductsRequest: false, 
        isProductsSuccess: false,
        isProductsFailed: true
      }
    }
    case ADD_UNUSUAL_PRODUCTS: {
      return {
        ...state,
        unusualProducts: action.products.map(product => ({ ...product, category: 'Необычная категория' }))
      }
    }
    default: {
      return state
    }
  }
}