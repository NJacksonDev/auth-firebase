// import state, then create state for email/password so we can take control of these components
// build a form submit handler
// import firestore and use auth


import { useState } from "react";

export default function Login() {
const [email, setEmail] = useState('') //best practice to put empty string as initial string
const [password, setPassword] = useState('')
const handleLogin =(e) => {
    e.preventDefault()
}
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">
          Email:{" "}
          <input 
            type="email" 
            name="email" 
            value={email} onChange={e => setEmail(e.target.value)}
            placeholder="yourname@domain.com" />
        </label>
        <br />
        <label htmlFor="email">
          Password:{" "}
          <input
            type="email"
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
