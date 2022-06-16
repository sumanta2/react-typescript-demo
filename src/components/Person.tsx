import { PersonProps } from "./Person.types"  //here import the PersonProps type from Person.types.ts file
//Here use object props
const Person = (props:PersonProps) => {
  return (
    <div>{props.name.first}{props.name.last}</div> 
  )
}

export default Person