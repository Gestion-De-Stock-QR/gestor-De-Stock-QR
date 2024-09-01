import React from 'react';

const StockControl = ({ accion, setAccion, cantidad, setCantidad, handleActualizarStock }) => {
    return (
        <div>
            <div>
                <label>
                    <input 
                        type="radio" 
                        name="accion" 
                        value="ingresar" 
                        checked={accion === 'ingresar'} 
                        onChange={() => setAccion('ingresar')} 
                    />
                    Ingresar
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="accion" 
                        value="egresar" 
                        checked={accion === 'egresar'} 
                        onChange={() => setAccion('egresar')} 
                    />
                    Egresar
                </label>
            </div>

            <div>
                <label>
                    Cantidad:
                    <input 
                        type="number" 
                        value={cantidad} 
                        onChange={(e) => setCantidad(e.target.value)} 
                        placeholder="Ingrese cantidad"
                    />
                </label>
            </div>

            <button onClick={handleActualizarStock}>Actualizar Stock</button>
        </div>
    );
};

export default StockControl;
