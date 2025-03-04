

export const getProducts = async () => {
    try {
      // const url = 'https://gateway-proyectosem1-production.up.railway.app/ms-operador/api/productos';
      const url = `https://gateway-proyectosem1-production.up.railway.app/ms-buscador/api?nombre=&descripcion=&aggregate=false`
      const response = await fetch(url);
      const {products} = await response.json();
      console.log(products)
      return products;
    } catch (error) {
      console.log(error)
    }
};

export const getSearchProductos = async(nombre: string, descripcion:string)=> {
  try {
    // const url = 'https://gateway-proyectosem1-production.up.railway.app/ms-operador/api/productos';
    const url = `https://gateway-proyectosem1-production.up.railway.app/ms-buscador/api?nombre=${nombre}&descripcion=${descripcion}&aggregate=false`
    const response = await fetch(url);
    const {products} = await response.json();
    console.log(products)
    return products;
  } catch (error) {
    console.log(error)
  }
}