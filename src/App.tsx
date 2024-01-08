import './App.css'

import { Route, Routes } from 'react-router-dom';
import Header from '@components/Header'
import Footer from '@components/Footer';
import HomePage from 'views/HomePage';
// import AdminPage from 'views/AdminPage';
// import CardVisual from 'views/CardVisual';


function App() {


  return (

    <div>
      <Header />
        <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='/admin-page.htm' element={<AdminPage />} /> */}
        {/* <Route path='/card-visual/:id' element={<CardVisual />} /> */}
      </Routes> 
      <Footer />
  </div>
  )
}

export default App
