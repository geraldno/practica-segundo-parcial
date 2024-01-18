import React, { useState } from "react";

const App = () => {
  const [mostrarParrafo, setMostrarParrafo] = useState(false);

  const toggleParrafo = () => {
    setMostrarParrafo(!mostrarParrafo);
  };

  return (
    <div>
      <button onClick={toggleParrafo}>Mostrar/ocultar párrafo</button>
      {mostrarParrafo && <p>Este es el párrafo que aparece y desaparece</p>}
    </div>
  );
};

export default App;
