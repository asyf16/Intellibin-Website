import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth ,logout } from "../../firebase";

function Home() {
  const [user, loading, error] = useAuthState(auth);
  return (
    <>
      <div className="homescreen">
        <h1 className="titleword">IntelliBin</h1>
        <center>
        <div className="portion">
        <h2>Sort Smart, Recycle Right!</h2>

        </div>
        </center>
          {user ? (
            <button className="homebutton" onClick={logout}>Log out</button>
          ) : (
            <>
              <Link to="/login">
                <button className="homebutton">Login</button>
              </Link>
              <Link to="/register">
                <button className="homebutton">Register</button>
              </Link>
            </>
          )}
      </div>
    </>
  );
}

export default Home;
