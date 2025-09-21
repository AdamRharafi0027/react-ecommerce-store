import { configureStore } from "@reduxjs/toolkit";
import ProductsReducers from "../slices/ProductSlices";
import FavoriteReducers from "../slices/FavoriteSlices"
const store = configureStore({
  reducer: {
    newProducts: ProductsReducers,
    Favorite: FavoriteReducers,
  },
});
export default store