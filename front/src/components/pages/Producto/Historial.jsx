import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Historial = () => {
    const navigate = useNavigate();

    const handleAtras = () => {
        navigate('/');
    };
  return (

    <div>
        <button onClick={ handleAtras } >Atras</button>
    </div>
  )
}
