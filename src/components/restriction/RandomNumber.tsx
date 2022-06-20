import React from 'react'
type RandomNumberType={
    value:number
}

type PositiveNumber=RandomNumberType &{
    isPositive:boolean
    isNegative?:never
    isZero?:never
}

type NegativeNumber = RandomNumberType & {
    isPositive?:never
    isNegative:boolean
    isZero?:never
}

type Zero = RandomNumberType & {
    isPositive?:never
    isNegative?:never
    isZero:boolean
}

type RandomNumberProps= PositiveNumber | NegativeNumber | Zero     //it only access positive number  or negative number or Zero 

export const RandomNumber = ({value,isPositive,isNegative,isZero}:RandomNumberProps) => {
  return (
    <div>                                          
        {value} {isPositive &&"positive"}{isNegative && 'negative'} {' '} {isZero && "zero"}
    </div>
  )
}
