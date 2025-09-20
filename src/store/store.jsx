import { configureStore } from "@reduxjs/toolkit";
import ProductsReducers from "../slices/ProductSlices";
const store = configureStore({
  reducer: {
    newProducts: ProductsReducers,
  },
});
export default store