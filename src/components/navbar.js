import { Route, Link, Routes } from 'react-router-dom';
import '../styles/navbar.css';
import AddBook from './addBook';
import Books from './book';
import Categories from './categories';

const navbar = () => (
  <>
    <div className="nav-container">
      <nav className="nav-bar">

        <ul className="nav-links">
          <li className="nav-link">
         
            <Link to="/">Bookstore CMS</Link>
          </li>
          <li className="nav-link">
        
            <Link to="Books"> BOOKS </Link>
          
          </li>
          <li className="nav-link">
          
            <Link to="Categories>">CATEGORIES</Link>
         
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<AddBook />} />
        <Route path="/Books" element={<Books />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </div>
  </>
);

export default navbar;
