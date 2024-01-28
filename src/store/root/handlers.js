export const handlePending = state => {
  state.error = null;
  state.isLoading = true;
};

export const handleFulfilled = state => {
  state.isLoading = false;
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload?.message || action.error?.message;
};
