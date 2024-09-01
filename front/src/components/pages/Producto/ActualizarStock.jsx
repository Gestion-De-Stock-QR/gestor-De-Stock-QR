import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../styles/actualizarStock.css';
import handleStartScan from '../../../Hooks/Scan';


export const ActualizarStock = () => {
    const navigate = useNavigate();
    const [scanResult, setScanResult] = useState(null);
    const [sabores, setSabores] = useState([]);
    const [saborSeleccionado, setSaborSeleccionado] = useState(null);
    const scannerRef = useRef(null);

    const handleAtras = () => {
        navigate('/');
    };

    useEffect(() => {
        fetch('./sabores.json')
            .then(response => response.json())
            .then(data => setSabores(data))
            .catch(error => console.error('Error al cargar sabores:', error));
    }, []);

    useEffect(() => {
        return () => {
            if (scannerRef.current) {
                scannerRef.current.clear();
                scannerRef.current = null;
            }
        };
    }, []);

    const iniciarEscaneo = () => {
        handleStartScan(setScanResult, setSaborSeleccionado, sabores, scannerRef);
    };

    return (
        <div className='container-actualizarStock'>
            <button onClick={handleAtras}>Atras</button>
            <h2>Escanea el código QR</h2>
            <button onClick={iniciarEscaneo}>Iniciar Escaneo</button>

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
