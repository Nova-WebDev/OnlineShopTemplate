import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './assets/font/fontawesome-free-6.7.2-web/css/all.min.css';
import { App } from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    
  </StrictMode>
)

