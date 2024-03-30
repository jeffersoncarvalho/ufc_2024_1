import {useState} from "react"

const Filho = ({altura,peso}) => {

    //let imc = peso/(altura*altura)
    const [imc, setImc] = useState(peso/(altura*altura))

    function renderizarSituacaoPeso() {
        if (imc < 18) return <h4>Abaixo do Peso!</h4>
        else if (imc > 25) return <h4>Acima do Peso!</h4>
        return <h4>Peso Ideal!</h4>
    }

    return (
        <>
            <h3>IMC: {imc.toFixed(2)} </h3>
            {renderizarSituacaoPeso()}
            <button
                onClick = {
                    () => {
                        setImc((anterior) => anterior + 20)
                        console.log(imc)
                    }
                }
            >
                Incrementar
            </button>
        </>
    )
}

export default Filho