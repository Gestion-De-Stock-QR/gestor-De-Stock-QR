import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Html5QrcodeScanner } from 'html5-qrcode';
import '../../../styles/actualizarStock.css';   


export const ActualizarStock = () => {
    const navigate = useNavigate();
    const [scanResult, setScanResult] = useState(null);
    const [sabores, setSabores] = useState([]);
    const [saborSeleccionado, setSaborSeleccionado] = useState(null);
    const scannerRef = useRef(null);

    const handleAtras = () => {
        navigate('/home');
    };

    useEffect(() => {
        //esto esta hardcodeado, deberia consultar a la base de datos los id para traer su info
        fetch('./sabores.json')
            .then(response => response.json())
            .then(data => setSabores(data))
            .catch(error => console.error('Error al cargar sabores:', error));
    }, []);

    const handleStartScan = () => {
        setScanResult(null);
        setSaborSeleccionado(null);

        if (!scannerRef.current) {
            const html5QrCodeScanner = new Html5QrcodeScanner('reader', {
                fps: 10,
                qrbox: { width: 250, height: 250 },
                aspectRatio: 1.0,
                disableFlip: false
            });

            const onScanSuccess = (decodedText, decodedResult) => {
                setScanResult(decodedText);
                console.log(`Scan result: ${decodedText}`, decodedResult);

                const scannedID = parseInt(decodedText, 10);
                
                const flavorData = sabores.find(flavor => flavor.id === scannedID);

                if (flavorData) {
                    setSaborSeleccionado(flavorData);
                } else {
                    console.warn('ID no encontrado en los sabores');
                }

                html5QrCodeScanner.clear();
                scannerRef.current = null;
            };

            const onScanError = (error) => {
                console.warn('Error al escanear el código QR:', error);
            };

            html5QrCodeScanner.render(onScanSuccess, onScanError);
            scannerRef.current = html5QrCodeScanner;
        } else {
            scannerRef.current.clear();
            scannerRef.current.render(onScanSuccess, onScanError);
        }
    };

    useEffect(() => {
        return () => {
            if (scannerRef.current) {
                scannerRef.current.clear();
                scannerRef.current = null;
            }
        };
    }, []);

    return (
        <div className='container-actualizarStock'>
            <button onClick={handleAtras}>Atras</button>
            <h2>Escanea el código QR</h2>
            <button onClick={handleStartScan}>Iniciar Escaneo</button>
            
          
            {saborSeleccionado && (
                <div>
                    <h2>Resultado del Escaneo:</h2>
                    <h1>Sabor: {saborSeleccionado.flavor}</h1>
                    <h1>Stock: {saborSeleccionado.stock}</h1>
                    {/*El STOCK SE DEBERIA PODER EDITAR EN ESTA PARTE */}
                </div>
            )}

            <div id="reader" style={{ width: '290px', height: '250px', marginTop: '20px' }}></div>
        </div>
    );
};
