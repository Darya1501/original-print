import { AppDispatch, AppThunk, TProduct } from "../../utils/types";
import { ADD_UNUSUAL_PRODUCTS, GET_PRODUCTS_FAILED, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "../constants/products";
import { child, get } from "firebase/database";
import { dbRef } from "../../app";

interface IGetProductsRequest {
  readonly type: typeof GET_PRODUCTS_REQUEST
}
interface IGetProductsSuccess {
  readonly type: typeof GET_PRODUCTS_SUCCESS,
  products: Array<TProduct>
}
interface IGetProductsFailed {
  readonly type: typeof GET_PRODUCTS_FAILED
}
interface IAddUnusualProducts {
  readonly type: typeof ADD_UNUSUAL_PRODUCTS,
  products: Array<TProduct>
}

export type TProductsActions = 
  IGetProductsRequest |
  IGetProductsSuccess |
  IGetProductsFailed |
  IAddUnusualProducts;

export const getProducts = (): AppThunk => (dispatch: AppDispatch) => {
  dispatch({ type: GET_PRODUCTS_REQUEST });
  
  get(child(dbRef, `/products`)).then((snapshot) => {
    if (snapshot.exists()) {
      dispatch({ type: GET_PRODUCTS_SUCCESS, products: snapshot.val() })
    } else {
      dispatch({ type: GET_PRODUCTS_SUCCESS, products: [] })
      console.log("No data available");
    }
  }).catch((error) => {
    dispatch({ type: GET_PRODUCTS_FAILED })
    console.error(error);
  });

  get(child(dbRef, `/unusual`)).then((snapshot) => {
    if (snapshot.exists()) {
      dispatch({ type: ADD_UNUSUAL_PRODUCTS, products: snapshot.val() })
    }
  }).catch((error) => {
    console.error(error);
  });
}