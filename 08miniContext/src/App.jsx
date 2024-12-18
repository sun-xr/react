import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";
import UserContextProvider from "./context/UserContextProvider.jsx";
function App() {
  return (
    <UserContextProvider>
      <h1>react</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
