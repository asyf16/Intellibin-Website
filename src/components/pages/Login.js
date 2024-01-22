import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../../Store";
import { Leaderboard } from "../Data";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) {
      console.log(auth);
     }
  }, [user, loading]);

  // function updateBoard(name,score,character){
  //   let changeprofile= "";
  //   if (character == "Dino"){
  //     changeprofile = "https://media.discordapp.net/attachments/955687301822939206/1195919827496345652/Screenshot_84.png?ex=65b5be21&is=65a34921&hm=f2b3e0052e47416584a7d7ba5b6965284ef651baa2f7ab422c8f79a10de5be63&=&format=webp&quality=lossless&width=930&height=930"
  //   }
  //   else if (character == "Shiba"){
  //     changeprofile = "https://media.discordapp.net/attachments/955687301822939206/1195919827978686625/Screenshot_85.png?ex=65b5be22&is=65a34922&hm=7f24d483eec1ef1195304e04240ababc915a8950be365c85d248679bebb70d31&=&format=webp&quality=lossless&width=930&height=930"
  //   }
  //   Leaderboard.push({
  //     name: name,
  //     location: "Canada",
  //     score : score,
  //     img: changeprofile,
  //     dt: "2022-02-10"
  // })
  // }
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
          {/* <button className="registerbutton" onClick={signInWithGoogle}>Login with Google</button> */}
          <Link to="/">
            <button>Home</button>
          </Link>
        </form>
      </center>
    </section>
  );
}

export default Login;
