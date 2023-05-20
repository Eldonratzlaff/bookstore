import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    Books: [],
};

const BooksSlice = createSlice({
    name: 'Books',
    initialState,
    reducers: { 
      addBook: (state, action) => {
        state.Books.push(action.payload);
      }         
    }
});

export default BooksSlice.reducer;


