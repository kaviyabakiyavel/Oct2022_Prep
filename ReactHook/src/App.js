//usecontext example 1
// import "./App.css";
// import MoveList from "./useContext/MovieList";
// import Nav from "./useContext/Nav";
// import { MovieProvider } from "./useContext/MovieContext";
// import AddMovie from "./useContext/AddMovie";
// function App() {
//   return (
//     <MovieProvider>
//       <div className="App">
//         <Nav />
//         <AddMovie />
//         <MoveList />
//       </div>
//     </MovieProvider>
//   );
// }
// export default App;

//usecontext example 2
// import React from "react";
// import { Toolbar, themes } from "./useContextExample2/theme";
// import { ThemeContext } from "./useContextExample2/theme";

// export function App() {
//   return (
//     <ThemeContext.Provider value={themes.dark}>
//       <Toolbar />
//     </ThemeContext.Provider>
//   );
// }

//callbackClassBasedComponent
// import Counter from "./callbackClassBasedComponent/Counter";
// export function App() {
//   return <Counter />;
// }

//useReducerExample1
//https://devtrium.com/posts/how-to-use-react-usereducer-hook

// import {Counter} from "./useReducerExample1/Counter";
// export function App() {
//   return <Counter />;
// }

//useReducerExample2
// import { Counter } from "./useReducerExample2/Counter";
// export function App() {
//   return <Counter />;
// }

//useReducerExample3
// import { Form } from "./useReducerExample3/Form";
// export function App() {
//   return <Form />;
// }

//useReducerExample3 - made single state
// import { Form } from "./useReducerExample4/Form";
// export function App() {
//   return <Form />;
// }

//useReducerExample5
// import { Form } from "./useReducerExample5/Form";
// export function App() {
//   return <Form />;
// }

//useReducerExample6
import {Form} from './useReducerExample6/Form'
export function App(){
  return <Form/>
}
