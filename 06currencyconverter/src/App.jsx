import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      className=" w-full h-screen flex flex-wrap bg-cover bg-no-repeat justify-center items-center"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/47344/dollar-currency-money-us-dollar-47344.jpeg?auto=compress&cs=tinysrgb&w=800)`,
      }}
    >
      <h1 className="text-3xl font-bold text-white">heiha</h1>
    </div>
  );
}

export default App;
