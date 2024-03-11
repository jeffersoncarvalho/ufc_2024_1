import { useState } from "react"

const Pokemon = () => {

    let url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    const [contador, setContador] = useState(1)

    const incrementarContador = () => {
        setContador(contador => contador + 1)
    }

    const decrementarContador = () => {
        if (contador - 1 <= 0) return
        setContador(
            (contador) => {
                return contador - 1
            }
        )
    }

    return (
        <div>
            <h2>ID: {contador}</h2>
            <img 
                src = {url+contador+".png"}
                alt = "Pokemon"
                width={200}
            />
            <button
                onClick={() => incrementarContador()}
            >
                Incrementar
            </button>
            <button
                onClick={decrementarContador()}
            >
                Decrementar
            </button>
        </div>
    )
}

export default Pokemon