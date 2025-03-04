// import { useState } from "react";

// interface Producto {
//   id: number;
//   nombre: string;
//   precio: number;
//   descripcion: string;
//   marca: string;
//   especificacion: string;
//   categoria: string;
// }

// function useProductSearch() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredProducts, setFilteredProducts] = useState<Producto[]>(productos);

//   const handleSearch = (term: string) => {
//     setSearchTerm(term);
//     // const results = productos.filter((producto) =>
//       producto.nombre.toLowerCase().includes(term.toLowerCase())
//     );
//     setFilteredProducts(results);
//   };

//   return { searchTerm, filteredProducts, handleSearch };
// }

// export default useProductSearch;
