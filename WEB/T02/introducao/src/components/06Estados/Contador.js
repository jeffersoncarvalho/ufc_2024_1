import { useState } from "react"

const Contador = () => {
    
    //let contador = 0
    const [contador, setContador] = useState(10)

    function incrementar(){
        setContador((contador) => {return contador + 1})
    } 
    
    return (
        <div>
            <h3>Contador: {contador}</h3>
            <button
                onClick={() => incrementar()}
            >
                Incrementar
            </button>
        </div>
    )
}

export default Contador