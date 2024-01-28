import { createSlice } from '@reduxjs/toolkit';
import { handleFulfilled, handlePending, handleRejected } from './handlers';

const initialState = {
  error: null,
  isLoading: false,
};

const rootSlice = createSlice({
  name: 'root',
  initialState,
  extraReducers: builder => {
    builder
      .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected)
      .addMatcher(({ type }) => type.endsWith('/fulfilled'), handleFulfilled);
  },
});

export const rootReducer = rootSlice.reducer;
