import React, { useLayoutEffect, useRef, useState } from "react";

export const PokemonCard = ({ id, name, sprites = [] }) => {

  const pRef= useRef();
  const [boxSize, setBoxSize] = useState({height:0,width:0});

  //se ejecuta una vez que cargo todo el dom
  //quedaria mejor el ejemplo si siempre trayera distinta cantidad de rexto paar que varie el tamaño del div
  useLayoutEffect(() => {
    const {height, width}=pRef.current.getBoundingClientRect();
    setBoxSize({height, width});
  
  }, [id])

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg my-3">
      <img className="m-auto" src={sprites[0]} alt={`"Imagen de "${name}`} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2" ref={pRef}>{id} - {name}</div>
      </div>
      <code>
        {JSON.stringify(boxSize)}
      </code>
    </div>
  );
};
