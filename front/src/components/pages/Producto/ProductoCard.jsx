import React from "react";
import "../../../styles/productoCard.css";

const ProductoCard = ({ nombre, stock,umbral }) => {
  return (
    <div >
      <h2 className="producto-nombre">{nombre}</h2>
      <p className="producto-stock">
        <strong>Stock:</strong> {stock} unidades
      </p>
       <p className="producto-stock">
        <strong>Umbral:</strong> {umbral} unidades
      </p>
    </div>
  );
};

export default ProductoCard;
