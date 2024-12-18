import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
function App() {
  return (
    <div className="bg-red-600">
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
