// src/components/ProductItem.jsx

function ProductItem({ producto }) {
  return (
    <li className="border-b py-2">
      <span className="font-bold">{producto.title}</span> – ${producto.price}
    </li>
  );
}

export default ProductItem;
/*muestra un solo producto con su titulo y precio. */