import { configureStore, createSlice } from "@reduxjs/toolkit";
import reducer from '../Features/practice';
//import apiReducer from '../Features/API/apiSlice';
const Store = configureStore({
  reducer:reducer
});

export default Store;