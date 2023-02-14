import { TProduct } from "./types";

export const getCategories = (products: Array<TProduct>): Array<string> => {
  const categories = products.map((product: TProduct) => product.category);
  categories.unshift('Все')
  return Array.from(new Set(categories))
}