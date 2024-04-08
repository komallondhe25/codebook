import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducer";
const filterIntialState = {
  productList: [],
  onlyInStock: false,
  bestSellerOnly: false,
  sortBy: null,
  rating: null,
};

const filterContext = createContext(filterIntialState);

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, filterIntialState);

  function initialProductList(products) {
    dispatch({
      type: "PRODUCT_LIST",
      payload: {
        products: products,
      },
    });
  }
  function bestSeller(products) {
    return state.bestSellerOnly
      ? products.filter((product) => product.best_seller === true)
      : products;
  }

  function inStock(products) {
    return state.onlyInStock
      ? products.filter((product) => product.in_stock === true)
      : products;
  }

  function sort(products) {
    if (state.sortBy === "lowtohigh") {
      return products.sort((a, b) => Number(a.price) - Number(b.price));
    }
    if (state.sortBy === "hightolow") {
      return products.sort((a, b) => Number(b.price) - Number(a.price));
    }
    return products;
  }

  function rating(products) {
    if (state.rating === "4STARABOVE") {
      return products.filter((product) => product.rating > 4);
    }
    if (state.rating === "3STARABOVE") {
      return products.filter((product) => product.rating > 3);
    }
    if (state.rating === "2STARABOVE") {
      return products.filter((product) => product.rating > 2);
    }
    if (state.rating === "1STARABOVE") {
      return products.filter((product) => product.rating > 1);
    }
    return products;
  }
  const filteredArray = sort(rating(inStock(bestSeller(state.productList))));

  const value = {
    state,
    dispatch,
    products: filteredArray,
    initialProductList,
  };

  return (
    <filterContext.Provider value={value}>{children}</filterContext.Provider>
  );
};

export const useFilter = () => useContext(filterContext);
