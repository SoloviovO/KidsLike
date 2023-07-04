const { createSlice } = require('@reduxjs/toolkit');

const awardsInitialState = {};

const awardsSlice = createSlice({
  name: 'awards',
  initialState: awardsInitialState,
});

export const awardsReducer = awardsSlice.reducer;
