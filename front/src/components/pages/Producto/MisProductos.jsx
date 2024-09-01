import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { obtenerAll } from '../../../servicios/productoService';

export const MisProductos = () => {
    const navigate = useNavigate();
    const [productosData, setProductosData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleAtras = () => {
        navigate('/');
    };

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const data = await obtenerAll();
                setProductosData(data);
            } catch (error) {
                console.error('Error al cargar los datos:', error);
                setError('No se pudieron cargar los productos.');
            } finally {
                setLoading(false);
            }
        };

        fetchProductos();
    }, []);

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className='container-misProductos'>
            <button onClick={handleAtras}>Atrás</button>
            <h2>Mis productos</h2>
            <ul>
                {productosData.length > 0 ? (
                    productosData.map((producto) => (
                        <li key={producto.id}>
                            <strong>Nombre:</strong> {producto.nombre} <br />
                            <strong>Stock:</strong> {producto.stock} unidades
                        </li>
                    ))
                ) : (
                    <li>No hay productos disponibles.</li>
                )}
            </ul>
        </div>
    );
};
