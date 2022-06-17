import { useContext } from "react"
import { theme } from "./theme"
import { ThemeContext } from "./ThemeContext"

const Box = () => {
  return (
    <div style={{backgroundColor:theme.primary.main,color:theme.primary.text}}>Theme Context</div>
  )
}

export default Box