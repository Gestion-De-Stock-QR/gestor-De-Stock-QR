import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../styles/actualizarStock.css';
import handleStartScan from '../../../Hooks/Scan';
import StockControl from './StockControl';
import { EgresarStock } from './Stock/EgresarStock';
import { IngresarStock } from './Stock/IngresarStock';

export const ActualizarStock = () => {
    const navigate = useNavigate();
    const [scanResult, setScanResult] = useState(null);
    const [sabores, setSabores] = useState([]);
    const [saborSeleccionado, setSaborSeleccionado] = useState(null);
    const [accion, setAccion] = useState('');
    const [cantidad, setCantidad] = useState('');
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

    const handleIniciarEscaneo = () => {
        handleStartScan(setScanResult, setSaborSeleccionado, sabores, scannerRef);
    };


    const handleActualizarStock = () => {
        const cantidadNumero = parseInt(cantidad, 10);

        if (!accion || isNaN(cantidadNumero) || cantidadNumero <= 0) {
            alert("Por favor, selecciona una acción y una cantidad válida.");
            return;
        }

        if (accion === 'ingresar') {
            IngresarStock(saborSeleccionado.stock,cantidadNumero, saborSeleccionado.id);
        } else if (accion === 'egresar') {
            EgresarStock(saborSeleccionado.stock,cantidadNumero,saborSeleccionado.id);
        }
    };

    return (
        <div className='container-actualizarStock'>
            <button onClick={handleAtras}>Atras</button>
            <h2>Actualizar stock</h2>
            <button onClick={handleIniciarEscaneo}>Iniciar escaneo</button>

            {saborSeleccionado && (
                <div>
                    <h2>Resultado del Escaneo:</h2>
                    <h1>Nombre: {saborSeleccionado.flavor}</h1>
                    <h1>Stock: {saborSeleccionado.stock}</h1>

                    <StockControl 
                        accion={accion} 
                        setAccion={setAccion} 
                        cantidad={cantidad} 
                        setCantidad={setCantidad} 
                        handleActualizarStock={handleActualizarStock} 
                    />
                </div>
            )}

            <div id="reader" style={{ width: '290px', height: '250px', marginTop: '20px' }}></div>
        </div>
    );
};
