import React, { useReducer } from "react";
import { reducer, initalValue } from "../useReducerExample4/reducer";

export function Form() {
  const [state, dispatch] = useReducer(reducer, initalValue);
  console.log("state", state);
  return (
    <div>
      <input
        type="text"
        value={state.username}
        onChange={(event) =>
          dispatch({
            type: "textInput",
            payload: { key: "username", value: event.target.value },
          })
        }
      />
      <input
        type="text"
        value={state.email}
        onChange={(event) =>
          dispatch({
            type: "textInput",
            payload: { key: "email", value: event.target.value },
          })
        }
      />
    </div>
  );
}
