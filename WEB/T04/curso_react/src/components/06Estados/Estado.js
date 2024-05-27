import { useState } from "react"

const Estado = () => {

    //let contador = 0
    let [contador, setContador] = useState(0)

    const incrementarContador = () => {
        //contador ++
        //console.log(contador)
        setContador(contador => contador + 1)
    }

    return (
        <div>
            <h2>Contador: {contador}</h2>
            <button
                onClick={() => incrementarContador()}
            >
                Incrementar Contador!
            </button>
        </div>
    )
}

export default Estado