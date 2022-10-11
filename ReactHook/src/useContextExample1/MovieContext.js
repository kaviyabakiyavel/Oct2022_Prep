import React, { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovie] = useState([
    {
      name: "Soorarai pootru",
      price: "120rs",
      id: "001",
    },
    {
      name: "Eswaran",
      price: "120rs",
      id: "002",
    },
    {
      name: "Master",
      price: "120rs",
      id: "003",
    },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovie]}>
      {props.children}
    </MovieContext.Provider>
  );
};
