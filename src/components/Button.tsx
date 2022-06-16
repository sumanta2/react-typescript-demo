import React from "react"

type ButtonProps={
    handleClick:(event:React.MouseEvent<HTMLButtonElement>, id:Number)=> void
}

const Button = (props:ButtonProps) => {
  //const handleInputChange= (event:React.ChangeEvent<HTMLInputElement>)=> { console.log(event)} //here also I create function which call through prop
  return (
    <button onClick={(event)=>props.handleClick(event,1)}>Click</button>
  )
}

export default Button