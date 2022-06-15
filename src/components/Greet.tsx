type GreetProps={    //follow a rule type use for application and interfaces used for libraries for avoid this rules no error occur
    name:string
}

const Greet = (props:GreetProps) => {
  return (
    <div>
        <h2>Welcome {props.name}! You have 10 unread messages</h2>
    </div>
  )
}

export default Greet