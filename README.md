# Consumir la API DummyJSON, procesar los datos y mostrarlos en una interfaz React con búsqueda y estadísticas.

# Explorador de Productos 🛒

Proyecto de práctica para la materia **Procesamiento de Datos con APIs REST**.

Esta aplicación web permite visualizar, filtrar, buscar y analizar productos utilizando la API de [DummyJSON](https://dummyjson.com/). Fue desarrollada con React y Tailwind CSS de forma incremental, siguiendo buenas prácticas de separación de componentes y estados.

---

## tecnologias utilizadas

- **React** (Vite)
- **Tailwind CSS**
- **Axios**
- **Recharts**
- **Git + GitHub**

---

## Estos puntos son los que llegue a implementar

- Llamado a API externa con Axios (`/products?limit=100`)
- Búsqueda por nombre de producto
- Filtro por categoría
- Ordenamiento por precio y rating -asc/desc-
- Componente de estadísticas: promedio, máximo y mínimo
- Toggle para mostrar/ocultar estadísticas
- Modo claro / oscuro (no me salio xD)
- Estilos con Tailwind aplicados en toda la interfaz
- Componentes reutilizables: `SearchBar`, `ProductList`, `StatsPanel`, `ChartsPanel`

---

## Como se ejecuta

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Cristhhh/ProyectoABP.git



src/api/products.js - archivo para obtener productos desde la api

src/components/ - componenetes que se reutilizan 

src/App.jsx - logica principal con los estados y renderizados
