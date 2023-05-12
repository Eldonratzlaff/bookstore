import '../styles/addBook.css'

const AddBook = () => {

return (
    <>
    <form  >
        <h2>Add New Book</h2>
        <input className="book-title" type="text" placeholder="Book Title"/>
        <input className="autor" type="text" placeholder="Category"  />
        <button type="submit">ADD BOOK</button>

    </form>
</>
    
    )

}

export default AddBook;