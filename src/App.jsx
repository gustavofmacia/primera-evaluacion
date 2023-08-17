import { useState } from "react";

import "./App.css";
import Card from "./Components/Card";

export default function App() {
  const [heroe, setHeroe] = useState({
    nombre: "",
    direccion: "",
  });

  const [showCard, setShowCard] = useState(false);
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (heroe.nombre.length >= 3 && heroe.direccion.length >= 6) {
      console.log("first");
      setShowCard(true);
      setError(false);
    } else {
      setShowCard(false);
      setError(true);
    }
  }

  return (
    <div className="App">
      <h1>Carga los datos de tu héroe favorito</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingresa el nombre"
          onChange={(e) => setHeroe({ ...heroe, nombre: e.target.value })}
        />
        <input
          type="text"
          placeholder="Ingresa su dirección"
          onChange={(e) => setHeroe({ ...heroe, direccion: e.target.value })}
        />
        <button>Guardar datos</button>
      </form>
      {showCard && <Card datos={heroe} />}
      {error && (
        <p style={{ color: "red", fontWeight: "500" }}>
          Por favor chequea que la información ingresada sea correcta.
        </p>
      )}
    </div>
  );
}
