import React from 'react'

type InputProps= React.ComponentProps<'input'>

export const Input = (props:InputProps) => {
  return (
    <div>
      <input {...props} />
    </div>
  )
}
