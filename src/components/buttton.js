

import { useDispatch } from 'react-redux';
import { removeBook } from '../reducers/books';

const Button = ({ bookId }) => {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook(bookId));
  };

  return (
    <button onClick={handleRemoveBook}>Remove Book</button>
  );
};

export default Button;
