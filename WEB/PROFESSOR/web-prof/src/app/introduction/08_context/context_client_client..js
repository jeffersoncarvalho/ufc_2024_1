'use client'
import { useContext } from "react"
import { ThemeContext} from "./theme_provider"

const ContextClientClient = () => {
    
    const value = useContext(ThemeContext)

    return (
       <h1>Context Client Client Value: {value.mode}</h1>
    )
}

export default ContextClientClient