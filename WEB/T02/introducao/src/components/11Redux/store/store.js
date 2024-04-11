import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "../slice/counterSlice"

const store = configureStore(
    {
        reducer: {
            counter: counterSlice
        }    
    }
)

export default store