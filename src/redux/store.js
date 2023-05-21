import { configureStore } from "@reduxjs/toolkit";

import BooksReducer from "./books/booksSlice";
import CategoriesReducer from "./categories/categoriesSlice";


const store = configureStore({

    reducer: { 
    Books: BooksReducer,
    Categories: CategoriesReducer,
    },
});

export default store;
