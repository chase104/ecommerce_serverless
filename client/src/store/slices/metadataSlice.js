import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  apiEndpoint: "https://4437y2tox5.execute-api.us-east-1.amazonaws.com",
};

export const productsSlice = createSlice({
  name: "metadata",
  initialState,
});

export const { setProducts, addProduct, removeProduct } = productsSlice.actions;

export default productsSlice.reducer;
