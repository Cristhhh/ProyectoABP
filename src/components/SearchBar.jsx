// src/components/SearchBar.jsx

function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Buscar"
      className="border p-2 w-full mb-4 rounded"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchBar;
/* Este es un input controlado: lo que se escribe se guarda en el estado search.*/