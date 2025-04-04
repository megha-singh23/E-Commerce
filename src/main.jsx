// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Components/router'
import ThemeContext from './Components/ThemeContext'
import { Provider } from 'react-redux'
import { store } from './redux/store'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <ThemeContext>
    <Provider store={store}>

    <RouterProvider router={router} basename={import.meta.env.BASE_URL} />
    </Provider>
    </ThemeContext>
  // </StrictMode>,
)
