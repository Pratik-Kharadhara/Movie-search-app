import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import { MovieProvider } from './context/MovieContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MovieProvider>
    <BrowserRouter>
      <App />
     </BrowserRouter>
</MovieProvider>
    
  </StrictMode>,
)
