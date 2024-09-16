import './App.scss';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent/HeaderComponent.jsx'
import HomePage from './pages/HomePage/HomePage.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />

        <Routes>
          <Route path="/" element={<HomePage/>} />

        </Routes>
      
      
      </BrowserRouter>
    </>
  )
}

export default App
