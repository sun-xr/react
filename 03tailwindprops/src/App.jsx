import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
let myObj = {
  name: "heiha",
  age: 23,
};
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-300 bg-gray-500 p-3 rounded-md">
        vite with tailwind
      </h1>
      {/* {}来包裹对象 */}
      <Card username="sxr" myarr={myObj} />
      <Card />
    </>
  );
}

export default App;
