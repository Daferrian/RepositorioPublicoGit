import React from "react";

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  descripcion: string;
  marca: string;
  especificaciones: string;
}

interface ModalProps {
  producto: Producto;
  onClose: () => void;
}

const ProductDetailModal: React.FC<ModalProps> = ({ producto, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img src={producto.imagen} alt={producto.nombre} className="modal-imagen" />
        <h2>{producto.nombre}</h2>
        <p><strong>Precio:</strong> ${producto.precio.toFixed(2)}</p>
        <p><strong>Descripción:</strong> {producto.descripcion}</p>
        <p><strong>Marca:</strong> {producto.marca}</p>
        <p><strong>Especificaciones:</strong> {producto.especificaciones}</p>
        <button onClick={onClose} className="close-modal">
          Cerrar
        </button>
      </div>
      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 9, 87, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal-content {
          background: white;
          padding: 20px;
          border-radius: 10px;
          text-align: center;
          width: 400px; 
          max-width: 90%;
          box-shadow: 0px 4px 10px rgba(52, 76, 183, 0.5);
          background: rgb(52, 76, 183, 0.8);
        }

        .modal-imagen {
          width: 100%; 
          height: 250px; 
          object-fit: cover; 
          border-radius: 10px;
          margin-bottom: 15px;
        }

        .close-modal {
          background: #ff4d4d;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1rem;
        }

        .close-modal:hover {
          background: #ff1a1a;
        }
      `}</style>
    </div>
  );
};

export default ProductDetailModal;
