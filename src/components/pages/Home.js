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
          {user ? (
            <button onClick={logout}>Log out</button>
          ) : (
            <>
              <Link to="/login">
                <button>Login</button>
              </Link>
              <Link to="/register">
                <button>Register</button>
              </Link>
            </>
          )}
      </div>
    </>
  );
}

export default Home;
