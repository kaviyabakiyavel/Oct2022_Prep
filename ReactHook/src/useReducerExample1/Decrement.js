import React, { useContext } from "react";
import { ListOfDispatch } from "./Counter";

export function Decrement() {
  const dispatch = useContext(ListOfDispatch);
   const handleClick = () => {
    dispatch({ type: "decrement" });
  }
  return (
    <div>
      <button onClick={handleClick}>Decrement </button>
    </div>
  );
}
