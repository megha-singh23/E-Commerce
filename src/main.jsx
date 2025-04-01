// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Components/router'
import ThemeContext from './Components/ThemeContext'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <ThemeContext>
    <RouterProvider router={router} />
    </ThemeContext>
  // </StrictMode>,
)
