//useReducer

//1) local state handling in functional component
// import React, { useState } from "react";
// export function Counter() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       Count : {count}
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//     </div>
//   );
// }

//2) handling state in reducer
// import React, { useReducer } from "react";
// import { reducer } from "./reducer";
// export function Counter() {
//   const initialState = { count: 0 };
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div>
//       Count: {state.count}
//       <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
//       <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
//     </div>
//   );
// }

//3) Counter(parent Compoent) Increment(child Component) Decrement (child Component)

import React, { useReducer } from "react";
import { reducer } from "./reducer";
import { Increment } from "./Increment";
import { Decrement } from "./Decrement";

export const ListOfDispatch = React.createContext(null);
export function Counter() {
  const initialState = { count: 0 };
  const [counter, dispatch] = useReducer(reducer, initialState);
  return (
    <ListOfDispatch.Provider value={dispatch}>
      Count: {counter.count}
      <Increment count={counter} />
      <Decrement count={counter} />
    </ListOfDispatch.Provider>
  );
}
