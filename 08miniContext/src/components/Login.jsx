import React from "react";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const handleChange = (e) => {
    // console.log(username, password);
    e.preventDefault();
    setUser({
      username,
      password,
    });
  };
  return (
    <div>
      <h2>login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={handleChange}>submit</button>
    </div>
  );
}

export default Login;
