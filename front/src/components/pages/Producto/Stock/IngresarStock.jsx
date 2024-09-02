import React from "react";
import { ingresarStock } from "../../../../servicios/productoService";

export const IngresarStock = (
  saborSeleccionadoStock,
  cantidadNumero,
  saborSeleccionadoId
) => {
  let nuevoStock = saborSeleccionadoStock + cantidadNumero;

  ingresarStock(saborSeleccionadoId, cantidadNumero);
  console.log(`stock actualizado ${nuevoStock} ` + saborSeleccionadoId);
};
