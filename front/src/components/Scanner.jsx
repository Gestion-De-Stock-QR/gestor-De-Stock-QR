import { useState, useEffect } from 'react'
import { Html5QrcodeScanner } from "html5-qrcode";


const Scanner = (prop) => {
    const [scanResult, setScanResult] = useState(null);

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

    const handleQR = () =>{
        if (prop.motivo === "alta") {
            // comunicar api dar de alta
        }
        else {
            // comunicar api dar de baja
        }
    }

    return (

        <div>
            {scanResult ? <div><a href={scanResult}>{scanResult}</a></div> : <div id="reader"></div>

            }
        </div>

    );
}

export default Scanner