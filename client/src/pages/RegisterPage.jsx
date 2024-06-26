import React, { useState } from "react";
import { json } from "react-router-dom";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const register = async (ev) => {
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/register',{
        method:"Post",
        body:JSON.stringify({username,password}),
        headers:{"Content-Type":'application/json'}
    })
    if (response.status===200){
        alert("Registration successful");
    }else{
        alert("Registration failed")
    }
  };
  return (
    <form onSubmit={register} className="register">
      <h1>Register</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(ev) => setUsername(ev.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <button>Register</button>
    </form>
  );
};

export default RegisterPage;
