import React, { useState } from "react";
// Gli Hooks devono essere usasti con use davanti
// componenti devono avere la prima lettere Maiuscola
// Gli Hook devono essere invocati all'interno del corpo/funzione del componente
// Gli Hook non possono essere utilizzati in maniera condizionale

const UsoBase = () => {
  const [btn, setBtn] = useState("Cambia titolo");
  const [titolo, setTitolo] = useState("hello world");
  const cambiaTitolo = () => {
    if (titolo === 'hello world') {
      setTitolo('React MAGICS')
      setBtn("Ritornare al titolo originale")
    } else {
      setTitolo('hello world')
      setBtn("Cambia titolo")
    }

  }

  return (
    <>
      {<section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
         
        }}
      >
        <h2>
          {titolo}
          <button onClick={cambiaTitolo} style={{ marginLeft: "1rem",  borderRadius: "20px"}}>
            {btn}
          </button>
        </h2>
      </section>}
    </>
  );
};

export default UsoBase;
