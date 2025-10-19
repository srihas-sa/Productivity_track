// Features/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.token = action.payload.token;
    },
    removeToken: (state) => {
      state.token = null;
    },
  },
});

export const { setCredentials, removeToken } = userSlice.actions;

export default userSlice.reducer;
