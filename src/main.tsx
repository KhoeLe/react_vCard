import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import BeatLoader from 'react-spinners/BeatLoader'
import { Toaster } from '@components/ui/toaster.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={ <BeatLoader color='#10B981' size={24} />}>
      <BrowserRouter basename='/business-card/CreateVCardWithPhoto.htm'>
      {/* <BrowserRouter > */}
        <Toaster />
          <App />
      </BrowserRouter>
    </Suspense>

  </React.StrictMode>,
)