import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar';
import BooksList from './components/bookitem';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <BooksList />
      </BrowserRouter>
    </>
  );
}

export default App;
