import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const slice = createSlice({
  name: "filters",
  initialState: initialState,
  reducers: {
    filter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { filter } = slice.actions;
export default slice.reducer;
