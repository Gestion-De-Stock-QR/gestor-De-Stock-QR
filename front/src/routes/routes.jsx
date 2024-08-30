import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from '../components/Home/Home'
import { NuevoProducto } from '../components/pages/Producto/NuevoProducto'





const router= createBrowserRouter([
    {
        path:'/',
        element: <Home/>
    },
    {
      path:'/agregar-nuevo-producto',
      element: <NuevoProducto/>
    }

])

export const MyRoutes = () => {
  return (
    <RouterProvider router={router}  />
  )
}