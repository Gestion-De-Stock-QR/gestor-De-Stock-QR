import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../components/Home/Home";
import { NuevoProducto } from "../components/pages/Producto/NuevoProducto";
import { ActualizarStock } from "../components/pages/Producto/ActualizarStock";
import { MisProductos } from "../components/pages/Producto/MisProductos";
import { Historial } from "../components/pages/Producto/Historial";
import Notificaciones from "../components/Home/Notificaciones";

export const MyRoutes = () => {
  return (
    <Router basename="/gestor-De-Stock-QR"> {/* Asegúrate de que coincida con el nombre de tu repositorio */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agregar-nuevo-producto" element={<NuevoProducto />} />
        <Route path="/actualizar-stock" element={<ActualizarStock />} />
        <Route path="/mis-productos" element={<MisProductos />} />
        <Route path="/historial" element={<Historial />} />
        <Route path="/notificaciones" element={<Notificaciones />} />
      </Routes>
    </Router>
  );
};
