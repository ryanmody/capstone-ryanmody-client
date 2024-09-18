import './App.scss';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent/HeaderComponent.jsx'
import HomePage from './pages/HomePage/HomePage.jsx';
import FooterComponent from './components/FooterComponent/FooterComponent.jsx';
import AddCategoryPage from './pages/AddCategoryPage/AddCategoryPage.jsx';
import AddTaskPage from './pages/AddTaskPage/AddTaskPage.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />

        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path='/addcategory' element={<AddCategoryPage />} />
          <Route path='/addtask' element={<AddTaskPage />} />
          <Route path='/:month/:date' element={<HomePage />} />
        </Routes>
        <FooterComponent />
      
      </BrowserRouter>
    </>
  )
}

export default App
