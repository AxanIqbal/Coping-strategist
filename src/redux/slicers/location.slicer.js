import { createSlice } from '@reduxjs/toolkit';

export const locationSlicer = createSlice({
  name: 'location',
  initialState: {
    location: {
      latitude: 0,
      longitude: 0,
    },
    radius: 50,
  },
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
      return state;
    },
    setRadius: (state, action) => {
      state.radius = action.payload;
      return state;
    },
  },
});

export const { setLocation, setRadius } = locationSlicer.actions;

export const selectLocation = (state) => state.location;

export default locationSlicer.reducer;
