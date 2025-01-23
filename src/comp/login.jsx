import React, { useContext, useState } from "react";
import userContext from "../context/userContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setuser } = useContext(userContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setuser({ username, password });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
         type="text"
        placeholder="User Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <div>
        <input
          type="password"
          placeholder="User Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button 
        onClick={handleSubmit} 
        disabled={!username || !password} // Disable the button if fields are empty
      >
        Submit
      </button>
    </div>
  );
}

export default Login;
