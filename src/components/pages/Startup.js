import React from "react";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase";
import "../../App.css";

function Startup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name || !email || !password){alert("Please enter all fields");}
    else{
      registerWithEmailAndPassword(name, email, password);
      alert("Registration complete, you are logged in")
      navigate("/");
    }
  };
  
  return (
    <section>
      <center>
        <h1>Register</h1>
        <form>
          <label>Username: </label>
          <br></br>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
          />
          <br></br>
          <label>Email: </label>
          <br></br>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email Address"
          />
          <br></br>
          <label>Password: </label>
          <br></br>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <br></br>
          <button className="registerbutton" onClick={register}>
            Register
          </button>
          {/* <button className="registerbutton" onClick={signInWithGoogle}>
            Register with Google
          </button> */}
          <Link to="/">
            <button>Home</button>
          </Link>
        </form>
      </center>
    </section>
  );
}

export default Startup;
