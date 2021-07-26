import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'query',
  initialState: {
    value: "",
  },
  reducers: {
    updateQuery: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateQuery } = slice.actions;
export const selectQuery = state => state.query.value;
export default slice.reducer;