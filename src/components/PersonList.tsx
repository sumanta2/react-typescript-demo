type PersonListProps ={
    names:{
        first:string
        last:string
    }[]
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