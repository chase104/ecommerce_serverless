import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice.js";
import productsReducer from "./slices/productsSlice.js";
import metadataReducer from "./slices/metadataSlice.js";

export const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
    metadata: metadataReducer,
  },
});
