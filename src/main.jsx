import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Homepage from './Components/Homepage.jsx'
import ContactUs from './pages/ContactUs.jsx'
import Events from './pages/Events.jsx'
import Blogs from './pages/Blogs.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} >
        <Route path='/' element={<Homepage />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/events' element={<Events />} />
        <Route path='/blogs' element={<Blogs />} />
      </Route>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
