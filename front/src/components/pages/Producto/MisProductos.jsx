// MisProductos.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { obtenerAll } from '../../../servicios/productoService';
import ProductoCard from './ProductoCard'; 

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
            <button className="btn-back" onClick={handleAtras}>Atrás</button>
            <h2>Mis productos</h2>
            <div className='productos-grid'>
                {productosData.length > 0 ? (
                    productosData.map((producto) => (
                        <ProductoCard 
                            key={producto.id} 
                            nombre={producto.nombre} 
                            stock={producto.stock} 
                        />
                    ))
                ) : (
                    <p>No hay productos disponibles.</p>
                )}
            </div>
        </div>
    );
};
