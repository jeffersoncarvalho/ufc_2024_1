import { useState } from "react"
import Imagem from "./Imagem"
import { PokemonContexto } from "./PokemonContexto"

const PokemonPrincipal = () => {

    const [id, setId] = useState(100)

    return (
        <div>
            <h2>Pokemon!</h2>
            <PokemonContexto.Provider value={{id,setId}}>
                <Imagem />
            </PokemonContexto.Provider>
        </div>
    )
}

export default PokemonPrincipal