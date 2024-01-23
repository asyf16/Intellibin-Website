import React, { useContext, useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

import "./Stats.css";
import Dog from "./Dog";
import Cat from "./Cat";
import Board from "./Board";
import { Context } from "../Store";
import Dino from "./Dino";
import Duck from "./Duck";

function Stats() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const [character, setCharacter] = useState("");
  const [today, setToday] = useState("");
  const [total, setTotal] = useState("");
  const [coins, setCoins] = useState("");
  const [capacity, setCapacity] = useState("");

  const [state, setState] = useContext(Context);
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
      setCharacter(data.character);
      setCoins(data.coins);
      setToday(data.today);
      setTotal(data.total);
      setCapacity(data.capacity);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    fetchUserName();
  }, [user, loading]);

  return (
    <>
      <section className="stats">
        <div className="stats-wrap">
          <div className="stats-one">
            {character === "Shiba" ? <Dog /> : null}
            {character === "Dino" ? <Cat /> : null}
            {character === "Chicken" ? <Dino /> : null}
            {character === "Avo" ? <Duck /> : null}
          </div>
          <div className="stats-two">
            <div className="stats-container">
              <h1>Profile</h1>
              <h2>User: {name}</h2>
              <h2>Items recycled today: {today}</h2>
              <h2>Items recycled total: {total}</h2>
              <h2>Trash capacity: {capacity}%</h2>
              <h2>Coins: {coins}</h2>
            </div>
          </div>
        </div>
        <div className="leaderboard">
          <Board />
        </div>
      </section>
    </>
  );
}

export default Stats;
