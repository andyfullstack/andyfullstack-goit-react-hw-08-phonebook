import { createSlice } from '@reduxjs/toolkit';
import {
  getCurrentUser,
  loginUser,
  logoutUser,
  registerUser,
} from './operations';

const initialState = {
  token: null,
  user: null,
  isLogin: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLogin = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLogin = true;
      })
      .addCase(logoutUser.fulfilled, state => {
        state.user = null;
        state.token = null;
        state.isLogin = false;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLogin = true;
      });
  },
});

export const authReducer = authSlice.reducer;
