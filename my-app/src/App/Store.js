import { configureStore, createSlice } from "@reduxjs/toolkit";
import reducer from '../Features/practice';
//import apiReducer from '../Features/API/apiSlice';
export const Store = configureStore({
  reducer:reducer
});