import React from "react";
import { egresoDeStock } from "../../../../servicios/productoService";

export const EgresarStock = (
  saborSeleccionadoStock,
  cantidadNumero,
  saborSeleccionadoId
) => {
  let nuevoStock = saborSeleccionadoStock - cantidadNumero;

  egresoDeStock(saborSeleccionadoId, cantidadNumero);
  console.log(`stock actualizado ${nuevoStock} ` + saborSeleccionadoId);
};
