import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import '../../../styles/nuevoProducto.css';
import { useNavigate } from 'react-router-dom';

export const NuevoProducto = () => {
  const [nombreDelProducto, setNombreDelProducto] = useState('');
  const [stockDelProducto, setStockDelProducto] = useState(0);
  const [qrCodeData, setQrCodeData] = useState('');
  const navigate = useNavigate();

  const handleInputChangeNombre = (event) => {
    setNombreDelProducto(event.target.value);
  };

  const handleInputChangeStock=(event)=>{
    setStockDelProducto(event.target.value);
  }

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
    navigate('/home');
  }

  return (
    <div className="container-nuevoProducto">
        <button onClick={ handleAtras }>Atras</button>
      <form>
        <div className="form-group">
          <label htmlFor="productName">Nombre del Producto:</label>
          <input
            placeholder='ej:Chocolate'
            type="text"
            id="productName"
            value={nombreDelProducto}
            onChange={handleInputChangeNombre}
          />
        </div>  
        <div className="form-group">
          <label htmlFor="productStock">Stock del producto</label>
          <input
            type="number"
            id="productStock"
            value={stockDelProducto}
            onChange={handleInputChangeStock}
          />
        </div>
        {/*CUANDO APRETA ESTE BOTON DEBERIA TAMBIEN GUARDAR LA INFO EN LA BD*/}
        <button className='boton-generar-qr' type="button" onClick={handleGeneracionQR}>
          Generar QR
        </button>
      </form>

      {qrCodeData && (
        <div className="qr-container">
          <QRCodeCanvas className='QR'
            id="qrCodeCanvas"
            value={qrCodeData}
            size={300}
            level={"H"}
            includeMargin={true}
          />
          <div className="container-boton-imprimir-qr" >
            <button className='boton-qr-imprimir' onClick={handleDescargaQR}>Descargar QR para imprimir</button>
          </div>  
        </div>
      )}
    </div>
  );
};

export default NuevoProducto;
