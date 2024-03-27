import React from "react";

const Card = ({ state }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mr-4 w-44">
      Hello
      <h2 className="text-xl font-semibold">{state}</h2>
    </div>
  );
};

export default Card;
