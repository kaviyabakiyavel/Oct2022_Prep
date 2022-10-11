import React, { useReducer } from "react";
import { reducer, initialValue } from "./reducer";

export const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const inputAction = (event) => {
    dispatch({
      type: "update",
      payload: { key: event.target.name, value: event.target.value },
    });
  };

  return (
    <div>
      FirstName:{" "}
      <input
        value={state.firstName}
        type="text"
        name="firstName"
        onChange={inputAction}
      />
      <br />
      LastName:{" "}
      <input
        value={state.lastName}
        type="text"
        name="lastName"
        onChange={inputAction}
      />
      <br />
      UserName:{" "}
      <input
        value={state.username}
        type="text"
        onChange={inputAction}
        name="username"
      />
      <br />
      Email:{" "}
      <input
        value={state.email}
        type="email"
        name="email"
        onChange={inputAction}
      />
    </div>
  );
};

export default Form;
