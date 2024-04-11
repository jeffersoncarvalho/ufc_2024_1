import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: 100,
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        incrementar: (state) => {state.value += 1},
        decrementar: (state) => {state.value -= 1},
        incrementarPorQtd: (state, action) => { state.value += action.payload}
    }
})

export const {incrementar, decrementar, incrementarPorQtd} = counterSlice.actions
export default counterSlice.reducer