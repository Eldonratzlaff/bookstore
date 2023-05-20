import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </>
  );
}

export default App;
