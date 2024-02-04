import React, {useState} from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "../firebase";
import {
  query,
  collection,
  getDocs,
  where,
  setDoc,
  doc,
} from "firebase/firestore";
import QRCode from 'react-qr-code';
import '../App.css'

function QR() {
    const [user, loading, error] = useAuthState(auth);
    const [uid, setUID] = useState("");
    const [back, setBack] = useState('#e0ddd7');
    const [fore, setFore] = useState('#000000');
    const [size, setSize] = useState(256);
    const fetchUserName = async () => {
        try {
          const q = query(collection(db, "users"), where("uid", "==", user?.uid));
          const doc = await getDocs(q);
          const data = doc.docs[0].data();
          setUID(data.uid);
        } catch (err) {
          console.error(err);
          alert("An error occured while fetching user data");
        }
      };
  return (
    
    <div className="qr-container">
        <center>
        <h1>Scan QR Code on device</h1>
        <p>Connect account to track your recycling statistics</p>
        <button onClick={fetchUserName}>Generate QR Code</button>
        <br />
        <br />
        {uid && (
                    <QRCode
                        title="User QR"
                        value={uid}
                        bgColor={back}
                        fgColor={fore}
                        size={size === '' ? 0 : size}
                    />
                )}
        </center>
    </div>
  )
}

export default QR