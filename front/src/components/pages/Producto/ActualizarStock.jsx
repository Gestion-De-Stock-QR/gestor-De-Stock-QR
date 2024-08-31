import React from 'react'
import { useNavigate } from 'react-router-dom';

export const ActualizarStock = () => {
    const navigate = useNavigate();

    const handleAtras = ()=>{
        navigate('/');
      }

  return (
    <div>    
     <button onClick={ handleAtras }>atras</button>
        
        <h2>Actualizar Stock</h2>
        
    </div>
  )
}
