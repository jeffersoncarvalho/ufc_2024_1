import { useContext } from "react"
import { PokemonContexto } from "./PokemonContext"

import PokemonDecrementar from "./PokemonDecrementar"
import PokemonIncrementar from "./PokemonIncrementar"

const PokemonImagem = () => {

    const {id} = useContext(PokemonContexto)
    const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

    return (
        <div>
            <img 
                src={url+id+".png"}
                alt="Pokemon"
                width={150}
            />
            <PokemonIncrementar />
            <PokemonDecrementar />
        </div>
    )
}
export default PokemonImagem