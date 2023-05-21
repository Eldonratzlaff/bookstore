import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../reducers/books';

const Book = ({ id, title, author, category }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <p>Category: {category}</p>
      <span>{title}</span>
      <button onClick={() => dispatch(removeBook(id))}>Remove</button>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
