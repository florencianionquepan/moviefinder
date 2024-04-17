import React from "react";

export const PokemonCard = ({ id, name, sprites = [] }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg my-3">
      <img className="w-50 m-auto" src={sprites[0]} alt={`"Imagen de "${name}`} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{id} - {name}</div>
      </div>
    </div>
  );
};
