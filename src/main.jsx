import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'


const router=createBrowserRouter(createRoutesFromElements(
              
  
  <Route path='/manoj_portfolio/' element={<Layout />} >
 
 
 <Route path='/manoj_portfolio/app' element={<App />} />



  </Route>


))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
)
