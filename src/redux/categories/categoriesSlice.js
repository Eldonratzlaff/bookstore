import { createSlice } from "@reduxjs/toolkit";

const CategoriesSlice = createSlice({
  name: 'Categories',
  initialState: {
    categories: [],
  },
  reducers: {
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },
  },
});

export const { addCategory } = CategoriesSlice.actions;

export default CategoriesSlice.reducer;

