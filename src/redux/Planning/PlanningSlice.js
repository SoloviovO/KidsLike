const { createSlice } = require('@reduxjs/toolkit');

const planningInitialState = {};

const planningSlice = createSlice({
  name: 'planning',
  initialState: planningInitialState,
});

export const planningReducer = planningSlice.reducer;
