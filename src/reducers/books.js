import {createSlice} from '@reduxjs/toolkit'

let nextBookId = 0

const bookSlice = createSlice({
    name: 'bookstore',
    initialState: [],
    reducers: {
        addBook: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title) {
                return {payload: {id: ++nextBookId, title}}
            },
        },
        removeBook: (state, action) => state.filter(book => book.id !== action.payload),
    },
})

export const {addBook, removeBook} = bookSlice.actions

export default bookSlice.reducer