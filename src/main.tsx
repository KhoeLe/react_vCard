import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import BeatLoader from 'react-spinners/BeatLoader'
import { Toaster } from '@components/ui/toaster.tsx'
import { ThemeProvider } from '@components/ui/theme-provider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
      <Suspense fallback={<BeatLoader color='#10B981' size={24} />}>
        <BrowserRouter>
        <Toaster />
        <App />
     
           
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>,
)
