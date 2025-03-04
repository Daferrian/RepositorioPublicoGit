import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductDetailModal from "./ProductDetailModal";
import {getProducts, getSearchProductos} from './helpers/getProducts';




interface Producto {
  id: number;
  nombre: string;
  precio: number;
  descripcion: string;
  marca: string;
  especificacion: string;
  categoria: string;
}

// "id": "8",
// "categoria": "Audífonos",
// "descripcion": "Audífonos con sonido envolvente.",
// "especificacion": "Bluetooth 5.0, batería de 12h.",
// "nombre": "Audífonos",
// "marca": "Marca C"

// const productos: Producto[] = [
//   {
//     id: 1,
//     nombre: "Camiseta",
//     precio: 15.99,
//     imagen: camisetaImg,
//     descripcion: "Camiseta de algodón, cómoda y ligera.",
//     marca: "Marca A",
//     especificaciones: "100% algodón, tallas S/M/L.",
//   },
//   {
//     id: 2,
//     nombre: "Pantalón",
//     precio: 35.5,
//     imagen: pantalonImg,
//     descripcion: "Pantalón casual, ideal para el día a día.",
//     marca: "Marca B",
//     especificaciones: "Mezclilla, colores variados.",
//   },
//   {
//     id: 3,
//     nombre: "Zapatillas",
//     precio: 45.75,
//     imagen: zapatillasImg,
//     descripcion: "Zapatillas deportivas con gran confort.",
//     marca: "Marca C",
//     especificaciones: "Suela de goma, tallas 6-11.",
//   },
//   {
//     id: 4,
//     nombre: "Gorra",
//     precio: 9.99,
//     imagen: gorraImg,
//     descripcion: "Gorra ajustable, perfecta para el sol.",
//     marca: "Marca D",
//     especificaciones: "Material poliéster, diseño unisex.",
//   },
//   {
//     id: 5,
//     nombre: "Mochila",
//     precio: 25.3,
//     imagen: mochilaImg,
//     descripcion: "Mochila resistente y espaciosa.",
//     marca: "Marca E",
//     especificaciones: "30L de capacidad, varios compartimentos.",
//   },
//   {
//     id: 6,
//     nombre: "Reloj",
//     precio: 75.0,
//     imagen: "../src/assets/images/reloj.jpg",
//     descripcion: "Reloj de lujo con diseño moderno.",
//     marca: "Marca F",
//     especificaciones: "Acero inoxidable, resistente al agua.",
//   },
//   {
//     id: 7,
//     nombre: "Audífonos",
//     precio: 49.9,
//     imagen: "../src/assets/images/audifonos.jpg",
//     descripcion: "Audífonos con sonido envolvente.",
//     marca: "Marca G",
//     especificaciones: "Bluetooth 5.0, batería de 12h.",
//   },
//   {
//     id: 8,
//     nombre: "Laptop",
//     precio: 899.99,
//     imagen: "../src/assets/images/laptop.jpg",
//     descripcion: "Laptop de alto rendimiento.",
//     marca: "Marca H",
//     especificaciones: "16GB RAM, 512GB SSD.",
//   },
//   {
//     id: 9,
//     nombre: "Mouse",
//     precio: 19.99,
//     imagen: "../src/assets/images/mouse.jpg",
//     descripcion: "Mouse ergonómico inalámbrico.",
//     marca: "Marca I",
//     especificaciones: "Sensor óptico, DPI ajustable.",
//   },
//   {
//     id: 10,
//     nombre: "Teclado",
//     precio: 45.0,
//     imagen: "../src/assets/images/teclado.jpg",
//     descripcion: "Teclado mecánico retroiluminado.",
//     marca: "Marca J",
//     especificaciones: "Interruptores mecánicos, RGB.",
//   },
//   {
//     id: 11,
//     nombre: "Monitor",
//     precio: 200.0,
//     imagen: "../src/assets/images/monitor.jpg",
//     descripcion: "Monitor Full HD de 27 pulgadas.",
//     marca: "Marca K",
//     especificaciones: "Panel IPS, tasa de refresco 144Hz.",
//   },
//   {
//     id: 12,
//     nombre: "Tablet",
//     precio: 350.0,
//     imagen: "../src/assets/images/tablet.jpg",
//     descripcion: "Tablet compacta y potente.",
//     marca: "Marca L",
//     especificaciones: "Pantalla de 10 pulgadas, 128GB de almacenamiento.",
//   },
//   {
//     id: 13,
//     nombre: "Cámara",
//     precio: 499.99,
//     imagen: "../src/assets/images/camara.jpg",
//     descripcion: "Cámara profesional DSLR.",
//     marca: "Marca M",
//     especificaciones: "Resolución 24MP, grabación 4K.",
//   },
//   {
//     id: 14,
//     nombre: "Auriculares Gaming",
//     precio: 69.99,
//     imagen: "../src/assets/images/auriculares.jpg",
//     descripcion: "Auriculares con micrófono ajustable.",
//     marca: "Marca N",
//     especificaciones: "Compatibles con PC y consolas.",
//   },
//   {
//     id: 15,
//     nombre: "Altavoz Bluetooth",
//     precio: 39.99,
//     imagen: "../src/assets/images/altavoz.jpg",
//     descripcion: "Altavoz portátil con sonido nítido.",
//     marca: "Marca O",
//     especificaciones: "Resistente al agua, 20h de batería.",
//   },
// ];

const Compras: React.FC = () => {
  const [productos, setProductos] = useState<Producto[]>([])
  const [carrito, setCarrito] = useState<Producto[]>([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState<Producto | null>(null);
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const { handleSearch } = useProductSearch(productos);


  useEffect(() => {
    getProducts()
      .then(prod => setProductos(prod))
      .catch(err => console.log(err));
    
  }, []);

  //- const [busqueda, setBusqueda] = useState<string>("");
  

  // Cargar carrito desde localStorage al montar el componente
  useEffect(() => {
    const carritoGuardado = localStorage.getItem("carrito");
    if (carritoGuardado) {
      setCarrito(JSON.parse(carritoGuardado));
    }
  }, []);

  // Guardar el carrito en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const agregarAlCarrito = (producto: Producto) => {
    setCarrito([...carrito, producto]);
  };

  const abrirDetalleProducto = (producto: Producto) => {
    setProductoSeleccionado(producto);
  };

  const cerrarDetalleProducto = () => {
    setProductoSeleccionado(null);
  };

  const eliminarDelCarrito = (index: number) => {
    setCarrito(carrito.filter((_, i) => i !== index));
  };

  const calcularTotal = () => {
    return carrito
      .reduce((total, producto) => total + producto.precio, 0)
      .toFixed(2);
  };

  // Filtrar productos según la búsqueda se cambio por el hook personalizado
  //const productosFiltrados = productos.filter((producto) =>
  //  producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  //);

  return (
    <div className="compras-container">
      <header>
        <h1>Tienda Online</h1>
      </header>

      <main>
        <h2>Productos Disponibles</h2>

        {/* <input
          type="text"
          placeholder="Buscar productos..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="busqueda-input"
        />
        se cambio este hook normal por uno personalizado para poder ocuparlo en distintos ambitos 
        */}
        {/* Campo de búsqueda */}
        <div>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Producto"
            className="busqueda-input"
          />

          <input
          type="text"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Descripcion"
          className="busqueda-input"
        />

        <button
        onClick={() => {
          getSearchProductos(nombre, descripcion)
          .then(prod => setProductos(prod))
          .catch(err => console.log(err));
        }}
        >Buscar</button>

        </div>

        <div className="productos-lista">
          {/* implemento de hook en el filtro */}
          {productos.map((producto) => (
            <div key={producto.id} className="producto-item">
              <img
                src={`../src/assets/images/${producto.id}.jpg`}
                alt={producto.nombre}
                className="producto-imagen"
              />
              <h3>{producto.nombre}</h3>
              <p className="producto-descripcion">{producto.descripcion}</p>
              <p>${producto.precio.toFixed(2)}</p>
              <button
                onClick={() => agregarAlCarrito(producto)}
                className="add-to-cart"
              >
                Agregar al carrito
              </button>
              <button
                onClick={() => abrirDetalleProducto(producto)}
                className="view-detail add-to-cart mt-2"
              >
                Detalle
              </button>
            </div>
          ))}
        </div>

        <h3>Carrito de Compras</h3>
        <div className="carrito">
          {carrito.length > 0 ? (
            carrito.map((producto, index) => (
              <div key={index} className="carrito-item">
                <p>{producto.nombre}</p>
                <button
                  onClick={() => eliminarDelCarrito(index)}
                  className="remove-from-cart"
                >
                  Eliminar
                </button>
              </div>
            ))
          ) : (
            <p>No hay productos en el carrito.</p>
          )}
        </div>

        <h4>Total: ${calcularTotal()}</h4>
        <Link to="/" className="back-button">
          Volver al inicio
        </Link>
      </main>

      {productoSeleccionado && (
        <ProductDetailModal
          producto={productoSeleccionado}
          onClose={cerrarDetalleProducto}
        />
      )}
      <footer>
        <p>&copy; 2025 Tienda Online</p>
      </footer>

      {/* se crean los estilos para la vista de la compra */}
      <style>{`
        .compras-container {
          padding: 20px;
        }

        button{
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.5s ease;
        }

        .busqueda-input {
          margin-bottom: 20px;
          margin-right:5px;
          padding: 10px;
          width: 100%;
          max-width: 300px;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        .productos-lista {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
        }

        .producto-item {
          background-color: #577BC1;
          margin: 10px;
          padding: 15px;
          border-radius: 5px;
          width: 200px;
          text-align: center;
        }

        .producto-imagen {
          width: 150px;
          height: 150px;
          object-fit: cover;
          border-radius: 5px;
          margin-bottom: 10px;
        }

        .add-to-cart {
          background-color: #FFEB00;
          color: #000957;
          border: none;
          padding: 10px;
          font-size: 1rem;
          cursor: pointer;
          border-radius: 5px;
        }

        .compras-container {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            text-align: center;
            background-color: #344CB7;
            color: white;
            padding: 20px;
            min-height: 100vh;
            box-sizing: border-box;
          }
  
          header h1 {
            font-size: 2.5rem;
            margin-bottom: 20px;
            color: #FFEB00;
          }
  
          main {
            width: 100%;
            max-width: 1200px;
          }
  
          main h2, main h3, main h4 {
            margin-top: 20px;
            color: white;
          }
  
          .productos-lista {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px;
          }
  
          .producto-item {
            background-color: #577BC1;
            margin: 10px;
            padding: 15px;
            border-radius: 5px;
            width: 200px;
            text-align: center;
          }
  
          
          .producto-descripcion {
            font-size: 0.9rem;
            color: #d4d4d4;
            margin: 5px 0;
          }
  
          .add-to-cart {
            background-color: #FFEB00;
            color: #000957;
            border: none;
            padding: 10px;
            font-size: 1rem;
            cursor: pointer;
            border-radius: 5px;
          }
  
          .carrito-item {
            background-color: #577BC1;
            padding: 10px;
            margin: 5px 0;
            border-radius: 5px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
  
          .remove-from-cart {
            background-color: #FF6347;
            color: white;
            border: none;
            padding: 5px 10px;
            font-size: 0.9rem;
            cursor: pointer;
            border-radius: 5px;
          }
  
          .back-button {
            background-color: #FFEB00;
            color: #000957;
            padding: 10px 20px;
            font-size: 1.1rem;
            text-decoration: none;
            border-radius: 5px;
          }
  
          footer {
            margin-top: 20px;
          }
  
          footer p {
            font-size: 0.9rem;
          }
  
          /* Responsivo */
          @media (max-width: 600px) {
            .producto-item {
              width: 100%;
            }
  
            .productos-lista {
              gap: 10px;
            }
  
            .compras-container {
              padding: 10px;
            }
          }
  
            .producto-imagen {
            width: 150px;
            height: 150px;
            object-fit: cover;
            border-radius: 5px;
            margin-bottom: 10px;
            }
  
      `}</style>
    </div>
  );
};

export default Compras;
