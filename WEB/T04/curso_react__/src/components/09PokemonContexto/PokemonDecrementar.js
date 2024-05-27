import { useContext } from "react"
import { PokemonContexto } from "./PokemonContext"

const PokemonDecrementar = () => {
    
    const {setId} = useContext(PokemonContexto)
    
    return (
        <div>
            <button
                
                onClick = {()=>setId(a=>a-1)}
            >
                Decrementar
            </button>
        </div>
    )
}
export default PokemonDecrementar