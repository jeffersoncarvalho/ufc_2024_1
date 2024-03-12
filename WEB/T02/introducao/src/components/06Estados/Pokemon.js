import { useState } from "react"

const Pokemon = () => {

    let url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    const [contador, setContador] = useState(10)

    function incrementar(){
        if (contador + 1 >= 1026) return
        setContador((contador) => {return contador + 1})
    }
    function decrementar(){
        if (contador - 1 <= 0) return
        setContador((contador) => {return contador - 1})
    } 

    return (
        <div>
            <h3>Contador: {contador}</h3>
            <img 
                src={url+contador+".png"}
                alt="Pokemon"
                width={300}
            />
            <button
                onClick={incrementar}
            >
                Incrementar
            </button>
            <button
                onClick={() => decrementar()}
            >
                Decrementar
            </button>
        </div>
    )
}

export default Pokemon