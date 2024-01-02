import './App.css'

import { Route, Routes } from 'react-router-dom';
import Header from '@components/Header'
import Footer from '@components/Footer';
import HomePage from 'views/HomePage';
import AdminPage from 'views/AdminPage';


function App() {


  
  return (

    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/admin-page' element={<AdminPage />} />
      </Routes>
      <Footer />
  </div>
  )
}

export default App
