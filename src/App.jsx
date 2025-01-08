import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/navbar'
import About from './components/about/about';
import Content from './components/content/content'

import Home from './components/home/home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Portfolio from './components/portfolio/portfolio'


const router = createBrowserRouter([

  {path:'/' , element:<Navbar/> , children:[
    {path: 'About' , element: <About/>},
    {path: 'content' , element: <Content/>},
    {index: true,  element: <Home/>},
    {path: 'Home' , element: <Home/>},
    {path: 'Portfolio',element: <Portfolio/>}
    
  ]},


])

export function App(){
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )

}