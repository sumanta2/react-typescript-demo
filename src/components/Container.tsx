type containerProps={
    style:React.CSSProperties  //it indicate only css valid property and attribute otherwise throw typescript error
}
const Container = (props:containerProps) => {
  return (
    <div style={props.style}>Container</div>
  )
}

export default Container