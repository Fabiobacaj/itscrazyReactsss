import React from "react";
//Far vedere che il componente non si riaggiorna ma la variabile si
//Spiegare che cosa è un React Fragment e che è possibile abbreviarlo


const ErroreBase = () => {
  let titolo = "heello world";
  const cambiaTitolo = () => {
    titolo = "ciao mondo";
    console.log(titolo);
  }
  return (
    <>
      <h1>{titolo}</h1>
      <button onClick={cambiaTitolo}>Cambia titolo</button>
    </>
  )
};

export default ErroreBase;
