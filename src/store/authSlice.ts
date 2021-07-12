import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authenticated: false,
  },
  reducers: {
    setAuthenticationStatus(state, {payload}) {
      state.authenticated = payload;
    },
  },
});

export const {setAuthenticationStatus} = authSlice.actions;

export default authSlice.reducer;
