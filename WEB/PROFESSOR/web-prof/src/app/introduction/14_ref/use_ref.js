'use client'

import { useRef, useState } from "react"

let globalX = 0

const UseRef = () => {
    let x = 0
    const refX = useRef(0)
    const [stateX, setStateX] = useState(0)

    return (
        <>
            {console.log("Render!")}
            <h3>X: {x}</h3>
            <h3>refX: {refX.current}</h3>
            <h3>stateX: {stateX}</h3>
            <h3>globalX: {globalX}</h3>

            <div>
                <button
                    onClick={() => {
                        x = x + 1
                        console.log("x: " + x)
                    }}
                >
                    Change x
                </button>
                <button
                    onClick={() => {
                        refX.current = refX.current + 1
                        console.log("refX:" + refX.current)
                    }}>
                    Change refX
                </button>
                <button
                    onClick={() => {
                        setStateX((prev)=>prev+1)
                        console.log("stateX:" + stateX)
                    }}
                >
                    Change stateX
                </button>
                <button
                    onClick={() => {
                        globalX = globalX + 1
                        console.log("globalX:" + globalX)
                    }}
                >
                    Change globalX
                </button>
            </div>
        </>
    )
}
export default UseRef