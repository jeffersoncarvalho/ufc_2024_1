import { useState, useEffect } from "react"

const Filho = ({altura, peso}) => {

    //let imc = peso/(altura*altura)

    const [imc, setImc] = useState(0)

    useEffect(
        () => {
            setImc(peso/(altura*altura))
        },
        [altura, peso]
    )

    function renderizarIMC() {
        if (imc < 18) return <h3>Abaixo do Peso!</h3>
        else if (imc > 25) return <h3>Acima do Peso!</h3>
        return <h3>Peso Ideal!</h3> 
    }

    return (
        <>
            <h3>IMC: {imc.toFixed(2)}</h3>
            {renderizarIMC()}
            <button
                onClick = {
                    () => {
                        //imc = imc + 10
                        setImc(imc + 10)
                        console.log(imc)
                    }
                }
            >
                Mudar IMC
            </button>
        </>
    )
}

export default Filho