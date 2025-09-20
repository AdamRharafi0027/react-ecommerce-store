import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  NewProduct: [],
};

const ProductsSlices = createSlice({
  name: "add to cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
        const exists = state.NewProduct.some(prod=> prod.id === action.payload.id)
        exists ? (alert("This Product Is already Added You Can Add quantity")) : (state.NewProduct = [...state.NewProduct, action.payload] )
    },
    removeFromCart: (state, action) => {
      state.NewProduct = state.NewProduct.filter(
        (products) => products.id !== action.payload
      );
    },
  },
});

export const { addToCart, removeFromCart } = ProductsSlices.actions;
export default ProductsSlices.reducer;
