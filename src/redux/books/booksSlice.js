import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    item_id: 'item1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    item_id: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    item_id: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  },
];

const BooksSlice = createSlice({
  name: 'Books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    removeBook: (state, action) => {
      const index = state.findIndex(book => book.item_id === action.payload.item_id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});


export const { addBook, removeBook } = BooksSlice.actions;

export default BooksSlice.reducer;


