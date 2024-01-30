'use client'

import { useState, useEffect } from "react"

const UseEffect = () => {
    
    const [count, setCount] = useState(0)
    const [even, setEven] = useState(true)

    useEffect(
        () => {
            if(count % 2 === 0) setEven(true)
            else setEven(false)
        }
        ,
        [count]
    )

    return (
        <>
            <h1>Counter: {count}</h1>
            <h1>Even: {even+""}</h1>
            <button onClick={()=>setCount(count + 1)}>Increase!</button>
        </>
    )
}

export default UseEffect