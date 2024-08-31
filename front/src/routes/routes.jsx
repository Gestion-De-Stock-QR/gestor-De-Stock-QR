import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from '../components/Home/Home'
import { NuevoProducto } from '../components/pages/Producto/NuevoProducto'
import { ConsultarStock } from '../components/pages/Producto/ConsultarStock'
import { ActualizarStock } from '../components/pages/Producto/ActualizarStock'
import { MisProductos } from '../components/pages/Producto/MisProductos'





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
    },
    {
      path:'/actualizar-stock',
      element: <ActualizarStock/>
    },
    {
      path:'/mis-productos',
      element: <MisProductos/>
    }

])

export const MyRoutes = () => {
  return (
    <RouterProvider router={router}  />
  )
}