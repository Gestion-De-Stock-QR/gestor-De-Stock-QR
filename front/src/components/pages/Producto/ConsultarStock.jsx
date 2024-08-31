import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Html5QrcodeScanner } from 'html5-qrcode';

export const ConsultarStock = () => {
    const navigate = useNavigate();
    const [scanResult, setScanResult] = useState(null);
    const scannerRef = useRef(null);

    const handleAtras = () => {
        navigate('/');
    };

    useEffect(() => {
        if (scannerRef.current) return;

        const scanner = new Html5QrcodeScanner('reader', {
            fps: 10, // Frames por segundo
            qrbox: { width: 250, height: 250 }, 
            aspectRatio: 1.0, 
            disableFlip: false 
        });

  
        const onScanSuccess = (decodedText) => {
            setScanResult(decodedText);
            scanner.clear(); 
        };

        const onScanError = (error) => {
            console.warn('Error al escanear el código QR:', error);
        };

        
        scanner.render(onScanSuccess, onScanError);

     
        scannerRef.current = scanner;

        // Función de limpieza
        return () => {
            if (scannerRef.current) {
                scannerRef.current.clear(); 
                scannerRef.current = null;
            }
        };
    }, []);

    useEffect(() => {
        if (scanResult) {
            if (scannerRef.current) {
                scannerRef.current.clear(); 
            }
        }
    }, [scanResult]);

    return (
        <div>
            <button onClick={handleAtras}>Atras</button>

            {scanResult ? (
                <div>
                    <h2>Resultado del Escaneo:</h2>
                    <p>{scanResult}</p> 
                </div>
            ) : (
                <div id="reader" style={{ width: '250px', height: '250px' }}></div> 
            )}
        </div>
    );
};
