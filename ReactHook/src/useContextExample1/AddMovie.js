import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

const AddMovie = () => {
  debugger;
  const [movies, setMovie] = useContext(MovieContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const updateName = (e) => {
    debugger;
    console.log("e", e);
    console.log("name", e.target.value);
    setName(e.target.value);
  };
  const updatePrice = (e) => {
    debugger;
    console.log("e", e);
    console.log("price", e.target.value);
    setPrice(e.target.value);
  };
  const addMovie = (e) => {
    debugger;
    e.preventDefault();
    setMovie((prevMovies) => [...prevMovies, { name: name, price: price }]);
  };
  console.log("check", name, price);
  return (
    <form onSubmit={addMovie}>
      Movie Name: <input type="text" name="name" onClick={updateName} />
      <br />
      Price: <input type="text" name="price" onClick={updatePrice} />
      <br />
      <button>Submit</button>
    </form>
  );
};
export default AddMovie;
