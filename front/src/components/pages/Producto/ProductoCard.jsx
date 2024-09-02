import React from "react";
import "../../../styles/productoCard.css";

const ProductoCard = ({ nombre, stock }) => {
  return (
    <div className="producto-card">
      <h3 className="producto-nombre">{nombre}</h3>
      <p className="producto-stock">
        <strong>Stock:</strong> {stock} unidades
      </p>
    </div>
  );
};

export default ProductoCard;
