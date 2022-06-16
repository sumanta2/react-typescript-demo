import {Name} from './Person.types'  //here import Name type from Person.types.ts file
type PersonListProps ={
    names:Name[]
}
const PersonList = (props:PersonListProps) => 
{
  return (
    <div>
        {props.names.map((data)=>(<><h4>{data.first}</h4><h5>{data.last}</h5></>))}
    </div>
  )
}

export default PersonList