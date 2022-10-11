//Lazy initialization
import React, { useReducer } from "react";
import { reducer, init } from "./reducer";

export function Counter() {
  const initalCount = 0;
  const [state, dispatch] = useReducer(reducer, initalCount, init);
  console.log("initalCount", initalCount);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "reset", payload: initalCount })}>
        Reset
      </button>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </>
  );
}
