import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import io from 'socket.io-client';

const SOCKET_URL = 'http://localhost:3000/';

const Notificaciones = () => {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleAtras = () => {
    navigate("/");
  };

  useEffect(() => {
    const socket = io(SOCKET_URL, { transports: ['websocket'] });

    socket.on('umbral-pasado', (data) => {
      console.log('Evento recibido:', data);
      setMessage(data.message);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <button onClick={handleAtras} >Atras</button>
      <h1>Notificaciones</h1>
      {message ? (
        <p>{message}</p>
      ) : (
        <p>Ninguna notificación</p>
      )}
    </div>
  );
};

export default Notificaciones;
