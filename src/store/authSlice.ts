import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'counter',
  initialState: {
    user: null,
  },
  reducers: {
    setUser(state, {payload}) {
      state.user = payload;
    },
  },
});

export const {setUser} = authSlice.actions;

export default authSlice.reducer;
