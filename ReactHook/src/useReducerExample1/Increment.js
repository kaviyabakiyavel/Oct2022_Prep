import React, { useContext } from "react";
import { ListOfDispatch } from "./Counter";

export function Increment() {
  const dispatch = useContext(ListOfDispatch);
  function handleClick() {
    dispatch({ type: "increment" });
  }
  return (
    <div>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
