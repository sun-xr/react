import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(1);
  const addValue = () => {
    setCounter((pre) => pre + 1);
    setCounter((pre) => pre + 1);
    setCounter((pre) => pre + 1);
  };
  const downValue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>ract course with hitesh</h1>
      <h2>counter value : {counter}</h2>
      <button onClick={addValue}>add</button> <button onClick={downValue}>downValue</button>
    </>
  );
}

export default App;
