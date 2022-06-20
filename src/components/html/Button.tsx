import React from 'react'
// type ButtonProps={
//   variant:'primary' | 'secondary'
// }&React.ComponentProps<'button'>  //as a children it accept string as well as child component   Example: <div>I am string</div>

type ButtonProps={
  variant:'primary' | 'secondary'
  children:string
}& Omit<React.ComponentProps<'button'>, 'children'> //as a children it accept only string   Example: >I am string
export const CustomButton = ({variant,children,...rest}:ButtonProps) => {  //it previous line "Omit" omit the React component from children property
  return (
   
      <button className={`class-with-${variant}`} {...rest}> {children}</button>
   
  )
}
