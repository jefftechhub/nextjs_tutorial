"use client";
import React, { useState } from "react";

const ClientPage = () => {
  const [value, setvalue] = useState(0);

  return (
    <div>
      <h1>client</h1>

      <button
        className="btn text-2xl"
        onClick={() => {
          setvalue(value + 1);
        }}
      >
        +
      </button>
      <h2 className="text-5xl">{value}</h2>
      <button
        className="btn text-2xl"
        onClick={() => {
          setvalue(value - 1);
        }}
      >
        -
      </button>
    </div>
  );
};

export default ClientPage;
