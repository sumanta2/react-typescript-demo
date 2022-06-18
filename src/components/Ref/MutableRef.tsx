import {useState,useEffect,useRef} from 'react'


const MutableRef = () => {
    const [timer, setTimer] = useState(0)
    const interValRef = useRef<number | undefined |null>(null)
    const stopTimer= ()=>{
     if(interValRef.current) window.clearInterval(interValRef.current)  //interValRef.current value may be undefined so we here mention undefined in useRef type otherwise may generate error
    }
    useEffect(() => {
      interValRef.current=window.setInterval(()=>{   //setInterval Return number value so we here mention number in useRef type otherwise may generate error
        setTimer((time)=> (time+1))
      },1000)
    
      return ()=>{
        stopTimer()
      }
     
    }, [])
    
  return (
    <div>
        HookTimer - {timer} -
        <button onClick={()=> {stopTimer()}}>Stop Timer</button>
    </div>
  )
}

export default MutableRef