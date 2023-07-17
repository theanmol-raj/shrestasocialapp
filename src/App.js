import { useEffect, useState } from "react";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";

import { doc,getDoc, setDoc ,getFirestore } from "firebase/firestore";



import app from "./firebase";


function App() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const db = getFirestore(app);

  const [user, setUser] = useState(() => auth.currentUser);
  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 1500);

  useEffect(() => {
    onAuthStateChanged(auth, (u) => {
      if (u) {
        setUser(u);
      } else {
        setUser(null);
      }
    });
  }, []);

  async function createNewUser(){
    await setDoc(doc(db, "users", user?.uid), {
      name: user?.displayName,
      img : user?.photoURL,      
    });
    
  }

  async function getUserDocument(docRef){
    return await getDoc(docRef)
  }


  useEffect(() => {
    if(user){
      const docRef = doc(db, "users", user?.uid);
      const docSnap = getUserDocument(docRef)
      if (docSnap.exists) {
        return 
      } else {
         createNewUser() ;
      }
    }
  },[user])









  function SIGNIN() {
    signInWithPopup(auth, provider)
      .then((result) => setUser(result.user))
      .catch(() => setUser(null));
  }

  function SIGNOUT() {
    signOut(auth)
      .then(() => setUser(null))
      .catch(() => setUser(user));
  }


  ///////    DB Functions  ////


  async function AddDataFirstTime(){
    await setDoc(doc(db, "users", user?.uid), {
      name: "Los Angeles",
      state: "CA",
      country: "USA"
    });

  }
  if (loading)
    return (
      <div className=" h-screen w-screen bg-black text-white flex justify-center items-center">
        <img
          className=" h-40 w-40 "
          src="https://img.icons8.com/glyph-neue/200/f7ab0a/maple-leaf.png"
          alt="logo"
        />
        <p className=" text-2xl">
          Loading <span className=" animate-pulse">. . .</span>
        </p>
      </div>
    );

  return (
    <div className=" h-screen">
      {user ? <HomeScreen user={user} logout={SIGNOUT} /> : <LoginScreen login={SIGNIN} />}
    </div>
  );
}

export default App;
