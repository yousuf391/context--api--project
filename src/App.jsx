import React from "react";
import Login from "./comp/login";
import Profile from "./comp/profile";
import { UserProvider } from "./context/userContextProvider"; // Adjust if needed

function App() {
  return (
    <UserProvider>
      <h1>Hi Yousuf</h1>
      <Login />
      <Profile />
    </UserProvider>
  );
}

export default App;
