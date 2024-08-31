import { Html5QrcodeScanner } from 'html5-qrcode';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const ConsultarStock = () => {
    const navigate = useNavigate();
    const [scanResult, setScanResult] = useState(null);

    const handleAtras = ()=>{
        navigate('/');
      }

      
      useEffect(() => {
          const scanner = new Html5QrcodeScanner('reader', {
              qrbox: {
                  width: 250,
                  height: 250,
              },
              fps: 5,
          });
          scanner.render(success, error);
          function success(result) {
              scanner.clear();
              setScanResult(result)
          }
          function error(err) {
              console.warn(err);
          }
      }, []);

  return (

    <div>
        <button onClick={ handleAtras }>atras</button>

        {scanResult ? <div><a href={scanResult}>{scanResult}</a></div> : <div id="reader"></div>}



    </div>
  )
}
