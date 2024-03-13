import { useContext } from "react"
import { PokemonContexto } from "./PokemonContexto"

const Incrementar = () => {

    const {setId} = useContext(PokemonContexto)

    return (
        <div>
            <button
                onClick={
                    () => {
                        setId(valor => valor + 1)
                    }
                }
            >
                Incrementar
            </button>
        </div>
    )
}

export default Incrementar