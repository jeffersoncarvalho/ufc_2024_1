import { useContext } from "react"
import MyNumber from "./MeuContexto"
import Neto from "./Neto"

const Filho = () => {
    
    const numero = useContext(MyNumber)

    return (
        <>
            <h3>Filho: {numero + 10}</h3>
            <img 
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero+10}.png`} 
            alt="pokemon"
            width={100}/>
            <Neto />
        </>
    )
}

export default Filho