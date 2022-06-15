type GreetProps={    //follow a rule type use for application and interfaces used for libraries for avoid this rules no error occur
    name:string
    messageCount?:number   //Here ? indicate that messageCount is optional attribute if we does not pass value to this it work properly
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