import {createSlice} from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    selectedComplexId: null,
    selectedApartmentId: null,
  },
  reducers: {
    setSelectedComplexId(state, {payload}) {
      state.selectedComplexId = payload.id;
    },
    setSelectedApartmentId(state, {payload}) {
      state.selectedApartmentId = payload.id;
    },
  },
});

export const {setSelectedComplexId, setSelectedApartmentId} = appSlice.actions;

export default appSlice.reducer;
