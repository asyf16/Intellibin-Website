import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  auth,
  logInWithEmailAndPassword,
} from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) {
      console.log(auth);
    }
  }, [user, loading]);

 
  return (
    <section>
      <h1>Login</h1>
      <center>
        <form>
          <label>Email:</label>
          <br></br>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email Address"
          />
          <br></br>
          <label>Password:</label>
          <br></br>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <br></br>

        </form>
        <Link to="/reset">
            {" "}
            <button>Forgot Password</button>
          </Link>
          <button
            className="registerbutton"
            onClick={() => logInWithEmailAndPassword(email, password)}
          >
            Login
          </button>
          <Link to="/">
            <button>Home</button>
          </Link>
      </center>
    </section>
  );
}

export default Login;
