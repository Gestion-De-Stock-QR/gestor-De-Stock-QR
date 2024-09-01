import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from '../components/Home/Home'
import { NuevoProducto } from '../components/pages/Producto/NuevoProducto'
import { ActualizarStock } from '../components/pages/Producto/ActualizarStock'
import { MisProductos } from '../components/pages/Producto/MisProductos'
// import { Login } from '../components/pages/Login/Login'


const router= createBrowserRouter([

    {
      path: '/home',
      element: <Home/>
    },
    {
      path:'/agregar-nuevo-producto',
      element: <NuevoProducto/>
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