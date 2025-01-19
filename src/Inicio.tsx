import React from "react";
import { Link } from "react-router-dom";

const Inicio: React.FC = () => {
  return (
    <div className="inicio-container">
      <header>
        <h1>Tienda Online</h1>
      </header>

      <main>
        <h2>Bienvenido a nuestra tienda</h2>
        <p>
          Explora nuestros productos y realiza tus compras de manera fácil y
          rápida.
        </p>
        <Link to="/compras" className="shop-button">
          Ir a la tienda
        </Link>
      </main>

      <footer>
        <p>&copy; 2025 Tienda Online</p>
      </footer>

      <style>{`
        .inicio-container {
          display: flex;
          flex-direction: column;
          height: 100vh;
          justify-content: space-between;
          align-items: center;
          text-align: center;
          background-color: #000957;
          color: white;
        }

        header h1 {
          font-size: 2.5rem;
          margin-top: 30px;
          color: #FFEB00;
        }

        main h2 {
          font-size: 2rem;
          margin: 20px 0;
        }

        main p {
          font-size: 1.2rem;
          margin-bottom: 20px;
        }

        .shop-button {
          background-color: #FFEB00;
          color: #000957;
          padding: 10px 20px;
          font-size: 1.1rem;
          text-decoration: none;
          border-radius: 5px;
        }

        footer p {
          margin-bottom: 20px;
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  );
};

export default Inicio;
