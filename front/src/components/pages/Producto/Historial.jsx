import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { obtenerAll } from '../../../servicios/productoService';


export const Historial = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleAtras = () => {
        navigate('/');
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await obtenerAll();
                setData(result);
            } catch (err) {
                setError(err.message || 'Error al obtener datos');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>{`Error: ${error}`}</p>;

    return (
        <div>
            <button onClick={handleAtras}>Atras</button>
            <div>
                <h1>Historial</h1>
                <ul>
                    {data.map((item, index) => (
                        <li key={index}>{JSON.stringify(item)}</li> 
                    ))}
                </ul>
            </div>
        </div>
    );
};
