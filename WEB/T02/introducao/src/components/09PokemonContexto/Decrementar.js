import { useContext } from "react"
import { PokemonContexto } from "./PokemonContexto"

const Decrementar = () => {

    const {setId} = useContext(PokemonContexto)

    return (
        <div>
            <button
                onClick={
                    () => {
                        setId(
                            (valor) => valor -1
                        )
                    }
                }
            >
                Decrementar
            </button>
        </div>
    )
}

export default Decrementar