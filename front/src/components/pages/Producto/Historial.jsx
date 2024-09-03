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
    const worksheet = XLSX.utils.json_to_sheet(data);
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

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{`Error: ${error}`}</p>;

  return (
    <div className="container-his">
      <button onClick={handleAtras}>Atras</button>
      <button onClick={handleExportarExcel}>Exportar a Excel</button>
      <div>
        <h1>Historial</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Stock Ingresado</th>
              <th>Fecha</th>
              <th>Tipo</th>
              <th>Producto ID</th>
              <th>Nombre del Producto</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.stockIngresado}</td>
                <td>{new Date(item.fecha).toLocaleString()}</td>
                <td>{item.tipo}</td>
                <td>{item.productoId}</td>
                <td>{item.producto.nombre}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
