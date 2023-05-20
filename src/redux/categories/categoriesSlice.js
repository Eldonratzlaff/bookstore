import { createSlice } from "@reduxjs/toolkit"; 

const CategoriesSlice = createSlice({
    name: 'Categories',
    initialState: {
        Categories: [],
    },      
    reducers: {
        addCategory: (state, action) => {
            state.Categories.push(action.payload);
        }

    }   
});

export default CategoriesSlice.reducer;
