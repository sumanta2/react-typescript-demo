type PersonProps={
    name :{
        first:string 
        last:string
    }
    
}
//Here use object props
const Person = (props:PersonProps) => {
  return (
    <div>{props.name.first}{props.name.last}</div> 
  )
}

export default Person