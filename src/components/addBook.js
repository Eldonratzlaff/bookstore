import '../styles/addBook.css';

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBook } from '../reducers/books'

const AddBook = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')

    const onAddBookClicked = () => {
        if (title) {
            dispatch(addBook(title))
            setTitle('')
        }
    }

    return (
        <div>
            <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Enter book title"
            />
            <button onClick={onAddBookClicked}>Add Book</button>
        </div>
    )
}

export default AddBook
