// useState vs useReducer : when to use which ?
//1) multiple pieces of state that rely on each other
//2) manage complex state

//1) multiple pieces of state that rely on each other
// The value of the input.
// Whether the input has already been "touched" by the user. This is useful to know whether to display an error. For example, if the field is required you want to display an error when it's empty. However, you don't want to display an error on the first render when the user has never visited the input before.
// Whether there's an error.

import React, { useReducer } from "react";
import { reducer, initalValue } from "./reducer";
import './style.css'


export const Form = () => {
  const [state, dispatch] = useReducer(reducer, initalValue);
  console.log("state",state)
  return (
    <div>
      <input
        className={state.error ? "error" : ""}
        value={state.value}
        onChange={(event) =>
          dispatch({
            type: "update",
            payload: {
              value: event.target.value,
              error: state.touched ? event.target.value.length === 0 : null,
            },
          })
        }
      />
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};
