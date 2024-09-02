import { Html5QrcodeScanner } from "html5-qrcode";
import { getProducto } from "../servicios/productoService";


const handleStartScan = (setScanResult, setSaborSeleccionado, scannerRef) => {
  setScanResult(null);
  setSaborSeleccionado(null);

  if (!scannerRef.current) {
    const html5QrCodeScanner = new Html5QrcodeScanner("reader", {
      fps: 10,
      qrbox: { width: 250, height: 250 },
      aspectRatio: 1.0,
      disableFlip: false,
    });

    const onScanSuccess = async (decodedText) => {
      setScanResult(decodedText);
      console.log(`Scan result: ${decodedText}`);

      const scannedID = parseInt(decodedText, 10);

      try {
        const producto = await getProducto(scannedID);
        if (producto) {
          setSaborSeleccionado(producto);
        } else {
          console.warn("Producto no encontrado");
        }
      } catch (error) {
        console.error("Error al obtener producto:", error);
      }

      html5QrCodeScanner.clear();
      scannerRef.current = null;
    };

    const onScanError = (error) => {
      console.warn("Error al escanear el código QR:", error);
    };

    html5QrCodeScanner.render(onScanSuccess, onScanError);
    scannerRef.current = html5QrCodeScanner;
  } else {
    scannerRef.current.clear();
    scannerRef.current.render(onScanSuccess, onScanError);
  }
};

export default handleStartScan;
