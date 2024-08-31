import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Html5QrcodeScanner } from 'html5-qrcode';

export const ConsultarStock = () => {
    const navigate = useNavigate();
    const [scanResult, setScanResult] = useState(null);
    const scannerRef = useRef(null);

    const handleAtras = () => {
        navigate('/home');
    };

    const handleStartScan = () => {
        
        setScanResult(null);

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
        <div>
            <button onClick={handleAtras}>Atras</button>
            <h2>Escanea el código QR</h2>
            <button onClick={handleStartScan}>Iniciar Escaneo</button>
            
            {scanResult && (
                <div>
                    <h2>Resultado del Escaneo:</h2>
                    <p>Sabor: {scanResult}</p>
                    <p>Stock: 15</p>
                </div>
            )}

            <div id="reader" style={{ width: '250px', height: '250px', marginTop: '20px' }}></div>
        </div>
    );
};
