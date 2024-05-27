import { configureStore } from "@reduxjs/toolkit"
import contadorSlice from "../slice/contadorSlice"

export const store = configureStore(
    {
        reducer: {
            contador: contadorSlice
        },
    }
)