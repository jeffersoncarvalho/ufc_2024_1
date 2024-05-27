import { useState } from "react"
import PokemonImagem from "./PokemonImagem"
import { PokemonContexto } from "./PokemonContext"

const PokemonPrincipal = () => {

    //const id = 100
    const [id, setId] = useState(250)

    return (
        <div>
           <h3>Pokemon!</h3>
           <PokemonContexto.Provider value={ {id, setId} }>
                <PokemonImagem />
           </PokemonContexto.Provider>
        </div>
    )
}
export default PokemonPrincipal