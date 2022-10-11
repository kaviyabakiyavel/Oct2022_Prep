import React, { useReducer } from "react";
import { reducer, initalValue } from "./reducer";

export function Form() {
  debugger;
  const [state, dispatch] = useReducer(reducer, initalValue);
  console.log("state", state);
  return (
    // <div>
    //   <input
    //     type="text"
    //     value={state.username}
    //     onChange={(event) =>
    //       dispatch({ type: "username", payload: event.target.value })
    //     }
    //   />
    //   <input
    //     type="text"
    //     value={state.email}
    //     onChange={(event) => {
    //       dispatch({ type: "email", payload: event.target.value });
    //     }}
    //   />
    // </div>

    //make it dynamic - action is common for both the field
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
