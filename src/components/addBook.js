import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../reducers/books';



const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const handleAddBook = () => {
    if (title) {
      const newBook = {
        title: title,
        // Add other book properties as needed
      };
      dispatch(addBook(newBook));
      setTitle('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter book title"
      />
      <button onClick={handleAddBook}>Add Book</button>
    </div>
  );
};

export default AddBook;
