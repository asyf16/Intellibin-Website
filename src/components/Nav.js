import "./Nav.css";
import "../App.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { Leaderboard } from "./Data";

function Nav() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  const [button, setButton] = useState(true);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    showButton();
  }, []);

  const board = () => {
    closeMenu();
    updateBoard();
  };

  const updateBoard = async () => {
    const q = query(collection(db, "users"));
    const doc = await getDocs(q);
    const long = doc.size;
    let changeprofile = "";
    for (let i = 0; i < long; i++) {
      let exist = false;
      for (let j = 0; j < Leaderboard.length; j++) {
        if (Leaderboard[j].email == doc.docs[i].data().email) {
          exist = true;
          Leaderboard[j].score = Number(doc.docs[i].data().total);
          Leaderboard[j].today = Number(doc.docs[i].data().today);
        }
      }
      if (!exist) {
        if (doc.docs[i].data().character == "Shiba") {
          changeprofile =
            "https://media.discordapp.net/attachments/955687301822939206/1195919827978686625/Screenshot_85.png?ex=65b5be22&is=65a34922&hm=7f24d483eec1ef1195304e04240ababc915a8950be365c85d248679bebb70d31&=&format=webp&quality=lossless&width=930&height=930";
        }
        if (doc.docs[i].data().character == "Dino") {
          changeprofile =
            "https://media.discordapp.net/attachments/955687301822939206/1195919827496345652/Screenshot_84.png?ex=65b5be21&is=65a34921&hm=f2b3e0052e47416584a7d7ba5b6965284ef651baa2f7ab422c8f79a10de5be63&=&format=webp&quality=lossless&width=930&height=930";
        }
        if (doc.docs[i].data().character == "Chicken") {
          changeprofile =
            "https://cdn.discordapp.com/attachments/955687301822939206/1195973396773740545/Screenshot_89.png?ex=65b5f005&is=65a37b05&hm=49ff1c90280880982d3000004364889f308f6ef7fe6ed8b3329eab3e1fb31974&";
        }
        if (doc.docs[i].data().character == "Avo") {
          changeprofile =
            "https://cdn.discordapp.com/attachments/955687301822939206/1195977164105986049/Screenshot_90.png?ex=65b5f388&is=65a37e88&hm=3341f5b0d679976123d75c7ad597810ac0ce77fc12085e24d957960f722de140&";
        }
        Leaderboard.push({
          name: doc.docs[i].data().name,
          location: "Canada",
          score: Number(doc.docs[i].data().total),
          today: Number(doc.docs[i].data().today),
          img: changeprofile,
          dt: "2022-02-10",
          email: doc.docs[i].data().email
        });
      }
      console.log("hi");
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="nav">
        <div className="nav-container">
          <Link to="https://devpost.com/software/intellibin-4qu7co" target="_blank" className="nav-logo" onClick={closeMenu}>
            IntelliBin
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMenu}>
                Home
              </Link>
            </li>
            {user ? (
              <>
                <li className="nav-item">
                  <Link className="nav-links" to="/Profile" onClick={board}>
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Shop" className="nav-links" onClick={closeMenu}>
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/info" className="nav-links" onClick={closeMenu}>
                    Info
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/QR" className="nav-links" onClick={closeMenu}>
                    Link Device
                  </Link>
                </li>
              </>
            ) : (
              <></>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
