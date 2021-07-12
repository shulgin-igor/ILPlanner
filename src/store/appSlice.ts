import {createSlice} from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    selectedComplexId: null,
  },
  reducers: {
    setSelectedComplexId(state, {payload}) {
      state.selectedComplexId = payload.id;
    },
  },
});

export const {setSelectedComplexId} = appSlice.actions;

export default appSlice.reducer;
