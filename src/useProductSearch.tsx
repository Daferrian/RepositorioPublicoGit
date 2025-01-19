import { useState } from "react";
import { Producto } from "./types"; 

function useProductSearch(productos: Producto[]) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Producto[]>(productos);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    const results = productos.filter((producto) =>
      producto.nombre.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(results);
  };

  return { searchTerm, filteredProducts, handleSearch };
}

export default useProductSearch;
