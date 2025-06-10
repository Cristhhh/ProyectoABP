// src/App.jsx
/*Creamos los 3 estados necesarios para el buscador.

Llenamos products y filtered con los datos de la API.

filtered será lo que realmente se muestra en pantalla.

search nos servirá en el próximo paso para saber qué escribir.*/
import { useEffect, useState} from 'react';
import { fetchProducts } from './api/products';
//importamoslos componentes, los dos
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import StatsPanel from './components/StatsPanel';


function App() {
  const [products, setProducts] = useState([]);  // productos originales
  const [filtered, setFiltered] = useState([]);  // productos filtrados
  const [search, setSearch] = useState('');  // lo que escribe el usuario
  const [showStats, setShowStats] = useState(true); // las estadisticas se ven por defecto
  const [categoria, setCategoria] = useState('todas');
  const [orden, setOrden] = useState('ninguna');
  const [modoOscuro, setModoOscuro] = useState(false);




  // traemos los productos en la app
  useEffect(() => {
    async function getData() {
      const data = await fetchProducts();
      setProducts(data); // datos originales
      setFiltered(data); // los usamos para mostrar todo al principio
    }
    getData();
  }, []);
  // useEffect que hace el filtrado
  useEffect(() => {
    let resultado = [...products];

    // filtrado por búsqueda
    resultado = resultado.filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );

    // filtrado pro categorias sino es todas
    if (categoria !== 'todas') {
      resultado = resultado.filter(p => p.category === categoria);
    }

    // orden
    if (orden === 'precio asc') {
      resultado.sort((a, b) => a.price - b.price);
    } else if (orden === 'precio desc') {
      resultado.sort((a, b) => b.price - a.price);
    } else if (orden === 'rating asc') {
      resultado.sort((a, b) => a.rating - b.rating);
    } else if (orden === 'rating desc') {
      resultado.sort((a, b) => b.rating - a.rating);
    }

    setFiltered(resultado);
  }, [search, products, categoria, orden]);

        /*products.filter: recorre todos los productos

      producto.title.toLowerCase(): convierte el titulo a minuscula

      .includes: verifica si el texto buscado esta dentro del título.

      search.toLowerCase(): lo convierte a minuscula para comparar sin importar mayusculas o tildes.

      setFiltered(...): guarda los productos que coinciden con la búsqueda.

      React se encargará de ejecutar este código cada vez que cambie search o products.*/

    return (
        <div className="flex flex-wrap items-center gap-3 mb-6 mt-2">
        <h1 className="text-2xl font-bold mb-4">Explorador de Productos</h1>
        <SearchBar value={search} onChange={setSearch} />
        {/* filtrado por categoría  ahora podemos elegir una categoría.*/}

        {/* Selects */}
        <select className="mb-4 p-2 border rounded mr-4" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
          <option value="todas">Todas las categorías</option>
          <option value="smartphones">Smartphones</option>
          <option value="laptops">Laptops</option>
          <option value="fragrances">Fragancias</option>
          <option value="skincare">Skincare</option>
          <option value="groceries">Comestibles</option>
        </select>

        <select className="mb-4 p-2 border rounded" value={orden} onChange={(e) => setOrden(e.target.value)}>
          <option value="ninguna">Sin orden</option>
          <option value="precio asc">Precio: menor a mayor</option>
          <option value="precio desc">Precio: mayor a menor</option>
          <option value="rating asc">Rating: menor a mayor</option>
          <option value="rating desc">Rating: mayor a menor</option>
        </select>

        {/* botones */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setShowStats(!showStats)}
            className={`px-4 py-2 rounded font-semibold transition-colors duration-200 shadow
              ${modoOscuro ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
          >
            {showStats ? 'Ocultar estadisticas' : 'Mostrar estadisticas'}
          </button>

          <button
            onClick={() => setModoOscuro(!modoOscuro)}
            className={`px-4 py-2 rounded font-semibold transition-colors duration-200 shadow
              ${modoOscuro ? 'bg-white text-black hover:bg-gray-200' : 'bg-gray-800 text-white hover:bg-gray-700'}`}
          >
            {modoOscuro ? 'Claro' : 'Oscuro'}
          </button>
        </div>

        {/* Mostrar datos */}
        {showStats && <StatsPanel productos={filtered} />}
        <ProductList productos={filtered} />
      </div>
    );

  }
export default App;
