// src/components/ProductList.jsx
import ProductItem from './ProductItem';

function ProductList({ productos }) {
  if (productos.length === 0) {
    return <p className="text-gray-500">Nada por aqui</p>;
  }

  return (
    <ul>
      {productos.map((p) => (
        <ProductItem key={p.id} producto={p} />
      ))}
    </ul>
  );
}

export default ProductList;
/* muestra todos los productos en una lista. Si no hay coincidencias, muestra un mensaje.*/