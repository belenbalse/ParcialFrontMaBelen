function Card ({ children, isNombre, isCiudad }) {
    return (
      <div>
        {isNombre ? <p>Hola, {children}</p> : null}
        {isCiudad ? <p>Tu ciudad favorita es: {children}</p> : null}
      </div>
    );
  }

  export default Card;
  