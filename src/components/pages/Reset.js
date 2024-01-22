import React, { useState, useEffect} from "react";
import { Link, useNavigate } from 'react-router-dom';
import {auth, sendPasswordReset } from "../../firebase"
import { useAuthState } from "react-firebase-hooks/auth";


function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user){
      console.log(auth);
      navigate("/");}
  }, [user, loading]);

  return (
    <section>
      <h1>Reset Password</h1>
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
        <br></br>
        <button onClick={() => sendPasswordReset(email)}>Reset</button>
        <Link to='/'><button>Home</button></Link>
      </form>
      </center>
    </section>
  );
}

export default Reset;
