import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './input.css'

import {  createRoutesFromElements, Route, RouterProvider , createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/home.jsx'
import About from './components/About/about.jsx'
import ContactUs from './components/contactus/contactus.jsx'
import User from './components/User/user.jsx'
import Github ,{githubInfoLoader} from './components/GitHub/github.jsx'





//const router = createBrowserRouter([
  // {
    /*path: '/',
    element : <Layout/>,
    children : [
      {
        path : "",
        element : <Home/>
      },
      {
        path : "about",
        element : <About/>
      },
      {
        path : "contactus",
        element : <ContactUs/>
      }

    
    ]*/
  // }

// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contactus' element={<ContactUs/>} />
      <Route path='user/:userid' element={<User/>} />
      <Route 
      loader = {githubInfoLoader}
      path='Github' 
      element={<Github/>} 
      />
    </Route>
  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router ={router}/>
  </StrictMode>,
)
