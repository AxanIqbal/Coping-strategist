import { createSlice } from '@reduxjs/toolkit';

export const Roles = {
  Admin: 'admin',
  Merchant: 'merchant',
  Customer: 'customer',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    // accessToken: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      return state;
    },
    logout: (state) => {
      state.user = null;
      // state.accessToken = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

// selectors
export const selectUser = (state) => state.user;

export default userSlice.reducer;
