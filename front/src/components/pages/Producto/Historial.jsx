import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { obtenerAll } from "../../../servicios/historialService";
import "../../../styles/historial.css";
import * as XLSX from "xlsx";

export const Historial = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleAtras = () => {
    navigate("/");
  };

  const handleExportarExcel = () => {
    const filteredData = data.map(({ productoId, ...rest }) => ({
      ...rest,
      nombreProducto: rest.producto ? rest.producto.nombre : 'Nombre no disponible'
    }));
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Historial");
    XLSX.writeFile(workbook, "Historial.xlsx");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await obtenerAll();
        setData(result);
      } catch (err) {
        setError(err.message || "Error al obtener datos");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="cargando-pagina">Cargando...</p>;
  if (error) return <p>{`Error: ${error}`}</p>;

  return (
    <div className="container-his">
      <button className ="boton-atras-historial" onClick={handleAtras}>Atras</button>
      <button className="boton-excel" onClick={handleExportarExcel}>Exportar a Excel</button>
      <div>
        <table>
          <thead>
            <tr className="columnas">
            
              <th>ID</th>
              <th>Stock Ingresado</th>
              <th>Fecha</th>
              <th>Tipo</th>
              <th>Nombre del Producto</th>
            
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td >{item.id}</td>
                <td >{item.cantidadStock}</td>
                <td>{new Date(item.fecha).toLocaleString()}</td>
                <td >{item.tipo}</td>
                <td >{item.producto ? item.producto.nombre : 'Nombre no disponible'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
