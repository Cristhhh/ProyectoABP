// src/api/products.js
//Este archivo separa la "lógica de red" del resto de la app. Así si más adelante cambia la URL o la forma de obtener los datos, no tenés que tocar toda la aplicación.

import axios from 'axios';

// obtenemos productos desde la api
export async function fetchProducts() {
  try {
    const response = await axios.get('https://dummyjson.com/products?limit=100');
    return response.data.products; // Devuelve solo el array de productos
  } catch (error) {
    console.error('Error al obtener productos:', error);
    return []; // Devuelve un array vacío si hay error
  }
}
