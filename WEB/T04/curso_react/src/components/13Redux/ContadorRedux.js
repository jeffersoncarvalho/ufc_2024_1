import { useSelector, useDispatch } from "react-redux"
import { incrementar, decrementar, incrementarPorQtd, decrementarPorQtd } from "./slice/contadorSlice"

const ContadorRedux = () => {

    const contador = useSelector(
        (state) => state.contador.valor 
    )

    const despachante = useDispatch()

    return (
        <>
            <h1>Contador: {contador}</h1>
            <button
                onClick={()=>{
                    despachante(incrementar())
                }}
            >Incrementar</button>
            <button
                onClick={()=>{
                    despachante(decrementar())
                }}
            >decrementar</button>
            <button
                onClick={()=>{
                    despachante(incrementarPorQtd(10))
                }}
            >aumentar +10</button>
            <button
                onClick={()=>{
                    despachante(decrementarPorQtd(10))
                }}
            >decrementar -10</button>
        </>
    )
}

export default ContadorRedux