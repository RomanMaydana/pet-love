import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// Supports weights 100-900
import '@fontsource-variable/onest'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
