import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const MisProductos = () => {
    const navigate = useNavigate();
    const [heladoData, setHeladoData] = useState([]);

    const handleAtras = () => {
        navigate('/home');
    };
    

    useEffect(() => {
        fetch('./sabores.json')
            .then(response => response.json())
            .then(data => setHeladoData(data))
            .catch(error => console.error('Error al cargar los datos:', error));
    }, []);

    //deberia recibir los productos desde la base de datos, pero esto es una simulacion

    return (
        <div>
            <button onClick={handleAtras}>Atras</button>
            <h2>Mis productos</h2>
            <ul>
                {heladoData.map((item, index) => (
                    <li key={index}>
                        <strong>Sabor:</strong> {item.flavor} <br />
                        <strong>Stock:</strong> {item.stock} unidades
                    </li>
                ))}
            </ul>
        </div>
    );
};
