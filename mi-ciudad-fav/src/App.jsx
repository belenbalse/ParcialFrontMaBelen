import { useState } from "react";
import Form from "./Components/Form";
import Card from "./Components/Card";

function App() {
  const [elNombre, setElNombre] = useState("");
  const [laCiudad, setLaCiudad] = useState("");

  function handleNombreSubmit(nombre) {
    setElNombre(nombre);
  }

  function handleCiudadSubmit(ciudad) {
    setLaCiudad(ciudad);
  }

  return (
    <>
      <Form onNombre={handleNombreSubmit} onCiudad={handleCiudadSubmit} />
      {elNombre ? <Card isNombre={elNombre}>{elNombre}</Card> : null}
      {elNombre ? <Card isCiudad={laCiudad}>{laCiudad}</Card> : null}
    </>
  );
}

export default App;

