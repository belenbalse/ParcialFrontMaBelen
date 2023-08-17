import { useState } from "react";

function Form(props) {
  const [nombre, setNombre] = useState("");
  const [mensajeNombre, setMensajeNombre] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [mensajeCiudad, setMensajeCiudad] = useState("");

  const nombreValidacion = () => {
    if (nombre.trim() !== "" && nombre.length > 3) {
      setMensajeNombre("");
      return true;
    } else {
      setMensajeNombre(
        "El campo nombre no puede estar vacío y debe contener más de 3 caracteres"
      );
      return false;
    }
  };

  const ciudadValidacion = () => {
    if (ciudad.trim() !== "" && ciudad.length > 6) {
      setMensajeCiudad("");
      return true;
    } else {
      setMensajeCiudad(
        "El campo nombre de la ciudad no puede estar vacío y debe contener más de 6 caracteres"
      );
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isNombreValid = nombreValidacion();
    const isCiudadValid = ciudadValidacion();

    if (isNombreValid && isCiudadValid) {
      props.onNombre(nombre);
      props.onCiudad(ciudad);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nombre">Nombre</label>
      <input
        type="text"
        id="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      {mensajeNombre && <p>{mensajeNombre}</p>}

      <label htmlFor="ciudad">Ciudad Favorita</label>
      <input
        type="text"
        id="ciudad"
        value={ciudad}
        onChange={(e) => setCiudad(e.target.value)}
      />
      {mensajeCiudad && <p>{mensajeCiudad}</p>}

      <button type="submit">Guardar</button>
    </form>
  );
}

export default Form;