import { useSelector, useDispatch } from "react-redux"
import { incrementar, decrementar, incrementarPorQtd } from "./slice/counterSlice"

const ContadorRedux = () => {

    const counter = useSelector( (state) => {
        return state.counter.value
    })
    const dispatch = useDispatch()

    return (
        <>
            <h1>Contador: {counter}</h1>
            <button
                onClick={() => dispatch(incrementar())}
            >
                Incrementar
            </button>
            <button
                onClick={() => dispatch(decrementar())}
            >
                Decrementar
            </button>
            <button
                onClick={() => dispatch(incrementarPorQtd(10))}
            >
                Aumentar +10
            </button>
        </>
    )
}

export default ContadorRedux