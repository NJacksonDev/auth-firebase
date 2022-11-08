import { useState } from 'react'
import Login from './scenes/Login';
import Protected from './scenes/Protected'

export default function App() {
  const [user, setUser] = useState()
  return (
  <>
   {!user
    ? <Login setUser={setUser}/>
    :<Protected/>   
  }
  </>
  );
}
