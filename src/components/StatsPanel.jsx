function StatsPanel({ productos }) {
  if (productos.length === 0) {
    return null; // si no hay productos no mostramos nadas
  }

  const precios = productos.map(p => p.price);
  const promedio = (precios.reduce((acc, val) => acc + val, 0) / precios.length).toFixed(2);
  const max = Math.max(...precios);
  const min = Math.min(...precios);

  return (
    <div className="bg-gray-100 p-4 rounded mb-4">
      <h2 className="text-lg font-semibold mb-2">Estadísticas</h2>
      <ul className="text-sm">
        <li> Precio promedio: ${promedio}</li>
        <li> Precio mas alto: ${max}</li>
        <li> Precio mas bajo: ${min}</li>
      </ul>
    </div>
  );
}

export default StatsPanel;
/* map(p => p.price): extrae solo los precios.

reduce: suma todos los precios.

Math.max y Math.min: encuentra el mayor y el menor.

toFixed(2): redondea el promedio a 2 decimales.

return null: no se muestra nada si no hay productos (evita errores)

*/