import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Toaster } from '@components/ui/toaster.tsx'
import { BrowserRouter } from 'react-router-dom'
import BeatLoader from 'react-spinners/BeatLoader'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={ <BeatLoader color='#10B981' size={24} />}>
      <BrowserRouter basename='/business-card/CreateVCardWithPhoto.htm'>
        <Toaster />
          <App />
      </BrowserRouter>
    </Suspense>

  </React.StrictMode>,
)