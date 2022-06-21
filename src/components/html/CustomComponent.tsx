import React from 'react'
import Greet from "../Greet"

//Here we import Greet component's props type and used it at CustomComponent's props type

const CustomComponent = (props:React.ComponentProps<typeof Greet>) => {
  return (
    <div>
        {props.name}
    </div>
  )
}

export default CustomComponent