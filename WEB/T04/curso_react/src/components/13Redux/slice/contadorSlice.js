import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    valor: 344342
}

export const contadorSlice = createSlice(
    {
        name: "contador",
        initialState,
        reducers: {
            incrementar: (state) => { state.valor += 1},
            decrementar: (state) => { state.valor -= 1},
            incrementarPorQtd: (state, action) => { state.valor += action.payload},
            decrementarPorQtd: (state, action) => { state.valor -= action.payload}
        
        }

    }
)

export const { incrementar, decrementar, incrementarPorQtd, decrementarPorQtd} = contadorSlice.actions
export default contadorSlice.reducer