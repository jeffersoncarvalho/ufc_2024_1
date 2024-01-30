"use client"

import { useState, useEffect } from "react"

import myPromise from "./my_promise"

const ConsumePromise = () => {
    
    const [msg, setMsg] = useState("BLANK")

    async function getData() {
        try {
            const res = await myPromise
            setMsg(res)
         } catch (error) {
            setMsg(error)
         }
    }

    useEffect(
        () => {
             getData()
        }
        ,
        []
    )
    
    return (
        <>
            <h1>MSG: {msg}</h1>
        </>
    )
}

export default ConsumePromise