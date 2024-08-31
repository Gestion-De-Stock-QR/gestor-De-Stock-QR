import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import '../../../styles/producto.css';
import { useNavigate } from 'react-router-dom';

export const NuevoProducto = () => {
  const [nombreDelProducto, setNombreDelProducto] = useState('');
  const [qrCodeData, setQrCodeData] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setNombreDelProducto(event.target.value);
  };

  const handleGeneracionQR = () => {
    if (nombreDelProducto.trim() === '') {
      alert('Por favor, ingresa un nombre de producto.');
      return;
    }
    //EN VEZ DE AÑADIR EL NOMBRE DEBERIA IR EL ID PARA MATCHEAR CON LA BASE DE DATROS Y PONER MAS INFO
    setQrCodeData(nombreDelProducto);
  };

  const handleDescargaQR = () => {
    const canvas = document.getElementById('qrCodeCanvas');
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

  const handleAtras = ()=>{
    navigate('/');
  }

  return (
    <div className="container">
        <button onClick={ handleAtras }>atras</button>
      <h2>Generar QR para Producto</h2>
      <form>
        <div className="form-group">
          <label htmlFor="productName">Nombre del Producto:</label>
          <input
            type="text"
            id="productName"
            value={nombreDelProducto}
            onChange={handleInputChange}
          />
        </div>
        {/*CUANDO APRETA ESTE BOTON DEBERIA TAMBIEN GUARDAR LA INFO EN LA BD*/}
        <button type="button" onClick={handleGeneracionQR}>
          Generar QR
        </button>
      </form>

      {qrCodeData && (
        <div className="qr-container">
          <QRCodeCanvas
            id="qrCodeCanvas"
            value={qrCodeData}
            size={300}
            level={"H"}
            includeMargin={true}
          />
          <div>
            <button onClick={handleDescargaQR}>Descargar QR para imprimir</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NuevoProducto;
