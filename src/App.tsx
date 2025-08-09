// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Creation from './components/Creation'
import Verification from './components/Verification'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Finalisation from './components/Finalisation'
import Acceuil from './components/Acceuil'


const router = createBrowserRouter([
  {
     path: '/',
    element: <Layout/>,
    children:[
      {
        path: '/',
        element:<Creation/>
      },
      {
        path: '/verification',
        element: <Verification/>
      },
      {
        path: '/finalisation',
        element: <Finalisation/>
      },
      {
        path: '/acceuil',
        element: <Acceuil/>
      },
    ]
  }
])

function App() {

  return ( 
    <RouterProvider router={router}/>
  )
}

export default App
