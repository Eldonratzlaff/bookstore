import { useSelector } from 'react-redux'
import Book from './bookitem'

const BookList = () => {
  const books = useSelector(state => state.books)

  return (
      <div>
        {books.map(book => (
            <Book key={book.id} id={book.id} title={book.title} />
        ))}
      </div>
  )
}

export default BookList