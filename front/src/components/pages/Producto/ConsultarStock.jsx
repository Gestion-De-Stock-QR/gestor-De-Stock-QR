import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Html5QrcodeScanner } from 'html5-qrcode';

export const ConsultarStock = () => {
    const navigate = useNavigate();
    const [scanResult, setScanResult] = useState(null);

    const handleAtras = () => {
        navigate('/');
    };

    useEffect(() => {
        //no se que apsa que no funciona bien, se duplica la camara y no enteindo por que
        
        const scanner = new Html5QrcodeScanner('reader', {
            fps: 10, 
            qrbox: { width: 250, height: 250 }, 
            aspectRatio: 1.0, 
            disableFlip: false 
        });

     
        const onScanSuccess = (decodedText, decodedResult) => {
            setScanResult(decodedText);
            console.log(`Scan result: ${decodedText}`, decodedResult);
            scanner.clear(); // Limpia el escáner
        };

        
        const onScanError = (error) => {
            console.warn('Error al escanear el código QR:', error);
        };

        
        scanner.render(onScanSuccess, onScanError);

    
        return () => {
            scanner.clear();
        };
    }, []); 

    return (
        <div>
            <button onClick={handleAtras}>Atras</button>
            <h2>Escanea el código QR</h2>
            <div id="reader" style={{ width: '250px', height: '250px' }}></div>
            {scanResult && (
                <div>
                    <h2>Resultado del Escaneo:</h2>
                    <p>{scanResult}</p> 
                </div>
            )}
        </div>
    );
};
