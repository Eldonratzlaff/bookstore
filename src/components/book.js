import { useSelector } from 'react-redux';
import Book from './bookitem';

const BooksList = () => {
  const books = useSelector((state) => state.books);

  if (!Array.isArray(books)) {
    return <div>No books available</div>;
  }

  return (
    <div>
      <h2>Books List</h2>
      {Object.values(books).map((book) => (
        <Book 
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          category={book.category} 
        />
      ))}
    </div>
  );
};

export default BooksList;
