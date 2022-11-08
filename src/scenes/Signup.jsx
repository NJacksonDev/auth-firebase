// import state, then create state for email/password so we can take control of these components
// build a form submit handler
// import firestore and use auth


import { useState } from "react";
import { initializeApp } from "firebase/app" //firebase library
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCdv81y_ceJ82v_RtQQ3CB2jAjVZxwrWG8",
    authDomain: "fir-auth-nj.firebaseapp.com",
    projectId: "fir-auth-nj",
    storageBucket: "fir-auth-nj.appspot.com",
    messagingSenderId: "923631676433",
    appId: "1:923631676433:web:56daea292f5ccd4f2b55b0"
  };

export default function Signup( {setUser } ) {
const [email, setEmail] = useState('') //best practice to put empty string as initial string (confirm exact circumstances)
const [password, setPassword] = useState('')
const handleSigup = async (e) => {
    e.preventDefault()
    const app = initializeApp(firebaseConfig) //connects to firebase
    const auth = getAuth(app) //connects us to firebase auth
    const response = await createUserInWithEmailAndPassword(auth, email, password) //three arguments/parameters
        .catch(alert)
    setUser(response.user)
}
  return (
    <>
      <h1>Signup</h1>
      <form onSubmit={handleSignup}>
        <label htmlFor="email">Email:{" "}
          <input 
            type="email" 
            name="email" 
            value={email} onChange={e => setEmail(e.target.value)}
            placeholder="yourname@domain.com" />
        </label>
        <br />
        <label htmlFor="email">Password:{" "}
          <input
            type="password"
            name="password"
            value={password} onChange={e => setPassword(e.target.value)}
            placeholder="********" />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
}
