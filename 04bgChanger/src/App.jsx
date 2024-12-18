import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen bg-red-300 duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center  bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center w-full max-w-3"></div>
        <button
          onClick={() => setColor("green")}
          className="outline-none px-5  bg-red-400"
        >
          test
        </button>{" "}
        <button
          onClick={() => setColor("red")}
          style={{ backgroundColor: "red" }}
          className="outline-none px-5  bg-red-400"
        >
          test2
        </button>{" "}
      </div>
    </div>
  );
}

export default App;
