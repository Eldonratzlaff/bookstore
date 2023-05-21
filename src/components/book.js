
import { useSelector } from 'react-redux';
import Book from './bookitem';


const BooksList = () => {
  const books = useSelector((state) => state.Books);

  if (!books) {
    return <div>No books available</div>;
  }

  return (
    <div>
      <h2>Books List</h2>
      {books.map((book) => (
        <Book key={book.id} id={book.id} title={book.title} />
      ))}
    </div>
  );
};

export default BooksList;
