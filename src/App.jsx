// src/App.jsx
/*Creamos los 3 estados necesarios para el buscador.

Llenamos products y filtered con los datos de la API.

filtered será lo que realmente se muestra en pantalla.

search nos servirá en el próximo paso para saber qué escribir.*/

import { useEffect, useState } from 'react';
import { fetchProducts } from './api/products';

function App() {
  // useState crea variables que React puede "vigilar"
  const [products, setProducts] = useState([]); // productos originales
  const [filtered, setFiltered] = useState([]); // productos filtrados
  const [search, setSearch] = useState('');     // lo que escribe el usuario

  // traemos los productos en la app
  useEffect(() => {
    async function getData() {
      const data = await fetchProducts();
      setProducts(data);    // datos originales
      setFiltered(data);    // los usamos para mostrar todo al principio
    }

    getData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Explorador de Productos</h1>

      {/* Más adelante acá irá el input de búsqueda y la lista */}
    </div>
  );
}

export default App;
