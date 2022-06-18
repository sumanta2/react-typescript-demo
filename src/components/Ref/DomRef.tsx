import {useEffect,useRef} from 'react'

const DomRef = () => {
    //const inputRef= useRef<HTMLInputElement>(null!) if we sure this value is always not null so we can write this in case does not need to use optional channing in 7 no line   "inputRef.current?.focus()"
    const inputRef= useRef<HTMLInputElement>(null)
    useEffect(() => {
      inputRef.current?.focus()
      
    }, [])
    
  return (
    <div>
        <input type='text' ref={inputRef}/>
    </div>
  )
}

export default DomRef