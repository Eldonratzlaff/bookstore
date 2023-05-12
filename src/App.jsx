import { BrowserRouter } from 'react-router-dom'
import navbar from './components/navbar'



function App() {
  return (
    <><BrowserRouter>
    {navbar()}  
    </BrowserRouter>     
    </>
  )
}

export default App
