import React from 'react'
type ListProps<T>= {   //<T> indicate generic type 
    items:T[]
    onClick:(value:T)=> void
}
//export const List =<T extends {id:number}>({items,onClick}:ListProps<T>) => {    //{id:number} means item object must contain id property <for normal string and integer value it make error>!!!!!!!!!!
export const List =<T extends string | number>({items,onClick}:ListProps<T>) => {   //<T extends {}> it says that T B any typescript type ('{}')
  return (
    <div>
        <h2>
            List of items 
        </h2>
        {
            items.map((item,index)=>(
                <div key={index} onClick={()=>onClick(item)}>
                    {item}
                </div>
            ))
        }
    </div>
  )
}
