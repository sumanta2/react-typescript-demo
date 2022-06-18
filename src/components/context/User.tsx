import { useContext } from "react"
import { UserContext } from "./UserContext"
const User = () => {
    const userContext=useContext(UserContext)

    const handleLogin= () =>{
        if(userContext)
        {
            userContext?.setUser({
                name:"teacher",
                email:"teacher@example.com"
            })
        }
    }
    const handleLogout= () =>{
        userContext?.setUser(null)
    }

    return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div >User name is {userContext?.user?.name}</div>
        <div >User Email is {userContext?.user?.email}</div>


    </div>
  )
}

export default User