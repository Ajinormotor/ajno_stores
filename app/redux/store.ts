import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const rootReducer = {
  cart: cartSlice
};

const store = configureStore({
  reducer: rootReducer
});

// TypeScript type for the Redux store
export type RootState = ReturnType<typeof store.getState>;

export default store;
