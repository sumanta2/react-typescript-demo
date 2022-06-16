import {useState } from 'react'

const Loggedin = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const handleLogin = () =>{ setIsLoggedIn(true)}
    const handleLogout  = () =>{ setIsLoggedIn(false)}

    return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>LogOut</button>
        <div>User is Logged {isLoggedIn ? 'in':'out'}</div>
    
    </div>
  )
}

export default Loggedin