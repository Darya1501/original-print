import { getCookie, setCookie } from "./cookies";
import { TCartProduct, TProduct } from "./types";

type TCookieProduct = {
  id: string,
  count: number
}

export const updateCookieCart = (products: Array<TCartProduct>) => {
  const cart = products.map(product => ({ id: product.id, count: product.count }))
  setCookie("original-print-cart", JSON.stringify(cart), 20)
}

const getProductById = (id: string, products: Array<TProduct>) => {
  return products.filter(product => product.id === id)[0]
}

export const getCookieCart = (products: Array<TProduct>) => {
  if (!products.length) return

  const cartString = getCookie("original-print-cart")
  if (cartString) {
    const items = JSON.parse(cartString)
    return items.map((item: TCookieProduct) => ({ ...getProductById(item.id, products), count: item.count }))
  };
}

export const isCookieCart = () => {
  return !!getCookie("original-print-cart")?.length;
}