type GreetProps={    //follow a rule type use for application and interfaces used for libraries for avoid this rules no error occur
    name:string
    messageCount:number
    isLoggedIn:boolean
}

const Greet = (props:GreetProps) => {
  return (
    <div>
        {
            props.isLoggedIn ? <h2>Welcome {props.name}! You have 10 unread messages</h2> : <h2>Welcome Guest</h2>
        }
        
    </div>
  )
}

export default Greet