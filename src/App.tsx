import './App.css'

import { Route, Routes } from 'react-router-dom';
import Header from '@components/Header'
import Footer from '@components/Footer';
import HomePage from 'views/HomePage';
import AdminPage from 'views/GenerateList';
import { TracingBeam } from '@components/ui/tracing-beam';
import GridSmallBackground from '@components/GridSmallBackground';
import Section from '@components/Section';


function App() {


  return (

    <div >
      <Header />
      <div className='w-full h-full container'>
        <GridSmallBackground>

          <TracingBeam>
            <Section />

            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/generate-list' element={<AdminPage />} />
              {/* <Route path='/card-visual/:id' element={<CardVisual />} /> */}




            </Routes>
          </TracingBeam>
        </GridSmallBackground>
      </div>



      <Footer />
    </div >
  )
}

export default App
