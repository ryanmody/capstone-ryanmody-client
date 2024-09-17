import './App.scss';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent/HeaderComponent.jsx'
import HomePage from './pages/HomePage/HomePage.jsx';
import FooterComponent from './components/FooterComponent/FooterComponent.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />

        <Routes>
          <Route path="/" element={<HomePage/>} />

        </Routes>
        <FooterComponent />
      
      </BrowserRouter>
    </>
  )
}

export default App
