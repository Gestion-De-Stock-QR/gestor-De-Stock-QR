import { Html5QrcodeScanner } from 'html5-qrcode';

const handleStartScan = (setScanResult, setSaborSeleccionado, sabores, scannerRef) => {
    setScanResult(null);
    setSaborSeleccionado(null);


    if (!scannerRef.current) {
        const html5QrCodeScanner = new Html5QrcodeScanner('reader', {
            fps: 10,
            qrbox: { width: 250, height: 250 },
            aspectRatio: 1.0,
            disableFlip: false,
        });

        const onScanSuccess = (decodedText, decodedResult) => {
            setScanResult(decodedText);
            console.log(`Scan result: ${decodedText}`, decodedResult);

            const scannedID = parseInt(decodedText, 10);
            const flavorData = sabores.find(flavor => flavor.id === scannedID);

            if (flavorData) {
                setSaborSeleccionado(flavorData);
            } else {
                console.warn('ID no encontrado en los sabores');
            }

            html5QrCodeScanner.clear();
            scannerRef.current = null;
        };

        const onScanError = (error) => {
            console.warn('Error al escanear el código QR:', error);
        };

        html5QrCodeScanner.render(onScanSuccess, onScanError);
        scannerRef.current = html5QrCodeScanner;
    } else {
        scannerRef.current.clear();
        scannerRef.current.render(onScanSuccess, onScanError);
    }
};

export default handleStartScan;
