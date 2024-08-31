import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from '../components/Home/Home'
import { NuevoProducto } from '../components/pages/Producto/NuevoProducto'
import { ConsultarStock } from '../components/pages/Producto/ConsultarStock'





const router= createBrowserRouter([
    {
        path:'/',
        element: <Home/>
    },
    {
      path:'/agregar-nuevo-producto',
      element: <NuevoProducto/>
    },
    {
        path:'/consultar-stock',
        element: <ConsultarStock/>
    }

])

export const MyRoutes = () => {
  return (
    <RouterProvider router={router}  />
  )
}