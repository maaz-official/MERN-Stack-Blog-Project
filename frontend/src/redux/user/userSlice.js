import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    error: null,
    loading: false
};

export const userSlice = createSlice({
  name: "user",
  initialState,
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
      updateStart(state) { // Updated action name to be consistent
        state.loading = true;
        state.error = null;
      },
      updateSuccess(state, action) {
        state.currentUser = action.payload;
        state.loading = false;
        state.error = null;
      },
      updateFailure(state, action) {
        state.loading = false;
        state.error = action.payload;
      },
      logout(state) {
        state.currentUser = null;
      }
  }
});

export const { loginRequest, loginSuccess, loginFailure, logout, updateStart, updateSuccess, updateFailure } = userSlice.actions;

export default userSlice.reducer;
