import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    error: null,
    loading: false
};

export const userSlice = createSlice({
  name: "user",
  initialState, // Make sure initialState is defined before it's used
  reducers: {
      loginRequest(state) {
          state.loading = true;
          state.error = null;
      },
      loginSuccess(state, action) {
        state.loading = false;
        state.currentUser = action.payload;
      },
      loginFailure(state, action) {
        state.loading = false;
        state.error = action.payload;
      },
      logout(state) {
        state.currentUser = null;
      }
  }
});

export const { loginRequest, loginSuccess, loginFailure, logout } = userSlice.actions;

export default userSlice.reducer;
