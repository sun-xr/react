import { useCallback, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useEffect, useRef } from "react";
function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) {
      str += "1234567890";
    }
    if (charAllowed) {
      str += "!@#$%^&*()_+{}[]|:;'<>,.?/~`";
    }

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      console.log(char);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);
  const passwordRef = useRef(null);
  const copyPassword = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };
  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Password generator</h1>
      <div className="flex flex-col items-center justify-center">
        <input
          type="text"
          value={password}
          className="outline-none w-full max-w-xs p-2 mb-2"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPassword}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          copy
        </button>
      </div>
      <div className="flex flex-col items-center justify-center mt-4">
        <div className="flex flex-row items-center justify-center">
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
            name=""
            id=""
          />
          <label htmlFor="length">Length:{length}</label>
        </div>
        <div className="flex flex-row items-center justify-center">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => setNumberAllowed((pre) => !pre)}
            name=""
            id="number"
          />
          <label htmlFor="number"> numbers</label>
        </div>
        <div className="flex flex-row items-center justify-center">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => setCharAllowed((pre) => !pre)}
            name=""
            id="char"
          />
          <label htmlFor="char"> chars</label>
        </div>
      </div>
    </div>
  );
}

export default App;
