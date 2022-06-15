type OscarProps={
    children:React.ReactNode   //React.ReactNode indicate we pass a react component to another React component as a children
}
const Oscar = (props:OscarProps) => {
  return (
    <div>
        {props.children}
    </div>
  )
}

export default Oscar