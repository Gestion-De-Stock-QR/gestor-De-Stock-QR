import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "../../../styles/nuevoProducto.css";
import { useNavigate } from "react-router-dom";
import { crearProducto } from "../../../servicios/productoService";

export const NuevoProducto = () => {
  const [nombreDelProducto, setNombreDelProducto] = useState("");
  const [stockDelProducto, setStockDelProducto] = useState(0);
  const [umbralDelProducto, setUmbralDelProducto] = useState(0);
  const [qrCodeData, setQrCodeData] = useState("");
  const navigate = useNavigate();

  const handleInputChangeNombre = (event) => {
    setNombreDelProducto(event.target.value);
  };

  const handleInputChangeStock = (event) => {
    setStockDelProducto(Number(event.target.value));
  };

  const handleInputChangeUmbral = (event) => {
    setUmbralDelProducto(Number(event.target.value));
  };

  const handleCrearProducto = async (producto) => {
    try {
      const response = await crearProducto(producto);
      setQrCodeData(response.id);
    } catch (error) {
      console.error("Error registrando:", error);
    }
  };

  const handleGeneracionQR = () => {
    if (
      nombreDelProducto.trim() === "" ||
      stockDelProducto <= 0 ||
      umbralDelProducto < 0
    ) {
      alert("Por favor, completa todos los campos correctamente.");
      return;
    }

    const producto = {
      nombre: nombreDelProducto,
      stock: stockDelProducto,
      umbral: umbralDelProducto,
    };

    handleCrearProducto(producto);
 
  };

  

  const handleDescargaQR = () => {
    const canvas = document.getElementById("qrCodeCanvas");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `${nombreDelProducto}-qrcode.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const handleAtras = () => {
    navigate("/");
  };

  return (
    <div className="container-nuevoProducto">
      <button onClick={handleAtras}>Atrás</button>
      <form>
        <div className="form-group">
          <label htmlFor="productName">Nombre del Producto:</label>
          <input
            placeholder="ej: Chocolate"
            type="text"
            id="productName"
            value={nombreDelProducto}
            onChange={handleInputChangeNombre}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productStock">Stock del Producto:</label>
          <input
            type="number"
            id="productStock"
            value={stockDelProducto}
            onChange={handleInputChangeStock}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productUmbral">Umbral:</label>
          <input
            type="number"
            id="productUmbral"
            value={umbralDelProducto}
            onChange={handleInputChangeUmbral}
          />
        </div>
        <button
          className="boton-generar-qr"
          type="button"
          onClick={handleGeneracionQR}
        >
          Generar QR
        </button>
      </form>

      {qrCodeData && (
        <div className="qr-container">
          <QRCodeCanvas
            className="QR"
            id="qrCodeCanvas"
            value={qrCodeData}
            size={300}
            level={"H"}
            includeMargin={true}
          />
          <div className="container-boton-imprimir-qr">
            <button className="boton-qr-imprimir" onClick={handleDescargaQR}>
              Descargar QR para imprimir
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NuevoProducto;
