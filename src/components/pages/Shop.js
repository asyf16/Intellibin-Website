import React, { useContext, useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "../../firebase";
import {
  query,
  collection,
  getDocs,
  where,
  setDoc,
  doc,
} from "firebase/firestore";
import "../Stats.css";
import "./Shop.css";
import { Context } from "../../Store";

function Shop() {
  const [user, loading, error] = useAuthState(auth);
  const [coins, setCoins] = useState("");
  const [got, setGot] = useState([]);
  const [character, setCharacter] = useState("");
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setCoins(data.coins);
      setGot(data.got);
      setCharacter(data.character);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  const updateCoins = async (enter) => {
    try {
      const cityRef = doc(db, "users", user?.uid);
      setDoc(cityRef, { coins: enter }, { merge: true });
      setCoins(enter);
    } catch (err) {
      console.error(err);
      alert("Error");
    }
  };

  const updateCharacter = async (enter) => {
    try {
      const cityRef = doc(db, "users", user?.uid);
      setDoc(cityRef, { character: enter }, { merge: true });
    } catch (err) {
      console.error(err);
      alert("Error");
    }
  };

  const updateGot = async (array) => {
    try {
      const cityRef = doc(db, "users", user?.uid);
      setDoc(cityRef, { got: array }, { merge: true });
    } catch (err) {
      console.error(err);
      alert("Error");
    }
  };

  useEffect(() => {
    if (loading) return;
    fetchUserName();
  }, [user, loading]);

  const [state, setState] = useContext(Context);
  const switchDog = () => {
    updateCharacter("Shiba");
  };
  const switchDino = () => {
    updateCharacter("Dino");
  };
  const switchChicken = () => {
    updateCharacter("Chicken");
  };
  const switchAvo = () => {
    updateCharacter("Avo");
  };

  const buyDog = () => {
    if (Number(coins) >= 100) {
      updateCoins(String(Number(coins) - 100));
      const temp = got;
      temp[1] = 1;
      updateGot(temp);
    } else {
      alert("Not enough coins");
    }
  };

  const buyChicken = () => {
    if (Number(coins) >= 200) {
      updateCoins(String(Number(coins) - 200));
      const temp = got;
      temp[2] = 1;
      updateGot(temp);
    } else {
      alert("Not enough coins");
    }
  };

  const buyAvo = () => {
    if (Number(coins) >= 400) {
      updateCoins(String(Number(coins) - 400));
      const temp = got;
      temp[3] = 1;
      updateGot(temp);
    } else {
      alert("Not enough coins");
    }
  };
  return (
    <>
      <section className="stats">
        <div className="stats-wrap">
          <h1>Shop</h1>
          <center>
            <h2>Coins: {coins}</h2>
          </center>

          <div className="stats-one">
            <div className="shop-container">
              <center>
                <img src="https://media.discordapp.net/attachments/955687301822939206/1195919827496345652/Screenshot_84.png?ex=65b5be21&is=65a34921&hm=f2b3e0052e47416584a7d7ba5b6965284ef651baa2f7ab422c8f79a10de5be63&=&format=webp&quality=lossless&width=930&height=930"></img>
                <h2>Happy Dino</h2>
                <p>Free</p>
                <button onClick={switchDino}>Use</button>
              </center>
            </div>
          </div>
          <div className="stats-two">
            <div className="shop-container">
              <center>
                <img src="https://media.discordapp.net/attachments/955687301822939206/1195919827978686625/Screenshot_85.png?ex=65b5be22&is=65a34922&hm=7f24d483eec1ef1195304e04240ababc915a8950be365c85d248679bebb70d31&=&format=webp&quality=lossless&width=930&height=930"></img>
                <h2>Joyful Shiba</h2>
                <p>100 coins</p>
                {got[1] == 1 ? (
                  <button onClick={switchDog}>Use</button>
                ) : (
                  <button onClick={buyDog}>Buy</button>
                )}
              </center>
            </div>
          </div>
          <div className="stats-one">
            <div className="shop-container">
              <center>
                <img src="https://cdn.discordapp.com/attachments/955687301822939206/1195973396773740545/Screenshot_89.png?ex=65b5f005&is=65a37b05&hm=49ff1c90280880982d3000004364889f308f6ef7fe6ed8b3329eab3e1fb31974&"></img>
                <h2>Strong Chicken</h2>
                <p>200 coins</p>
                {got[2] == 1 ? (
                  <button onClick={switchChicken}>Use</button>
                ) : (
                  <button onClick={buyChicken}>Buy</button>
                )}
              </center>
            </div>
          </div>
          <div className="stats-two">
            <div className="shop-container">
              <center>
                <img src="https://cdn.discordapp.com/attachments/955687301822939206/1195977164105986049/Screenshot_90.png?ex=65b5f388&is=65a37e88&hm=3341f5b0d679976123d75c7ad597810ac0ce77fc12085e24d957960f722de140&"></img>
                <h2>Healthy Avocado</h2>
                <p>400 coins</p>
                {got[3] == 1 ? (
                  <button onClick={switchAvo}>Use</button>
                ) : (
                  <button onClick={buyAvo}>Buy</button>
                )}
              </center>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Shop;
