import {useState}  from 'react'

type AuthUser = {
    name:string
    email: string
}

const User = () => {
    //in useState <AuthUser | null> indicate later useState store AuthUser or null type Variable/values
    const [user,setUser]= useState<AuthUser>({} as AuthUser)   //{} declare blank object of AuthUser type
    const handleLogin = () =>{
        setUser(
            {
                name:"father",
                email:"father.example.com"
            }
        )
    }
    const handleLogout = () => {}
  return (
    <div>
         <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>LogOut</button>
        <div>User name is {user?.name}</div>   {/*   here data type may be null so here optional chaining are used*/}
        <div>User email is {user?.email}</div>
    </div>
  )
}

export default User