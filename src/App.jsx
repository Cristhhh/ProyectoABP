// src/App.jsx
/*Creamos los 3 estados necesarios para el buscador.

Llenamos products y filtered con los datos de la API.

filtered será lo que realmente se muestra en pantalla.

search nos servirá en el próximo paso para saber qué escribir.*/
import { useEffect, useState } from 'react';
import { fetchProducts } from './api/products';
//importamoslos componentes, los dos
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import StatsPanel from './components/StatsPanel';


function App() {
  const [products, setProducts] = useState([]);  // productos originales
  const [filtered, setFiltered] = useState([]);  // productos filtrados
  const [search, setSearch] = useState('');  // lo que escribe el usuario
  // traemos los productos en la app
  useEffect(() => {
    async function getData() {
      const data = await fetchProducts();
      setProducts(data); // datos originales
      setFiltered(data); // los usamos para mostrar todo al principio
    }
    getData();
  }, []);
  // Este useEffect se ejecuta cada vez que cambia 'search' o 'products'
  useEffect(() => {
    const resultado = products.filter(producto =>
      producto.title.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(resultado);
  }, [search, products]);

        /*products.filter: recorre todos los productos

      producto.title.toLowerCase(): convierte el titulo a minuscula

      .includes: verifica si el texto buscado esta dentro del título.

      search.toLowerCase(): lo convierte a minuscula para comparar sin importar mayusculas o tildes.

      setFiltered(...): guarda los productos que coinciden con la búsqueda.

      React se encargará de ejecutar este código cada vez que cambie search o products.*/

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Explorador de Productos</h1>
      <SearchBar value={search} onChange={setSearch} />
      <StatsPanel productos={filtered} />
      <p className="mb-2 text-sm text-gray-500">Resultados: {filtered.length}</p>
      <ProductList productos={filtered} />
    </div>
  );
}

export default App;
