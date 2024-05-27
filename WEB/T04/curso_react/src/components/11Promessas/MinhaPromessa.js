import { useEffect, useState } from "react"

const minhaPromessa = new Promise(
    (resolve, rejected) => {
        //computação de x segundos...
        setTimeout(
            () => {
                //console.log("Fui executado!")
                const meuNumero = Math.floor(Math.random() * 10) +1
                if ( meuNumero % 2 === 0) resolve("Deu tudo certo, seu número é " + meuNumero)
                else rejected("Deu tudo errado, seu número é: " + meuNumero)
            } 
            ,
            2000
        )//setTimeout
    }//Promise
)

const ComponentePromessa = () => {

    const [resultado, setResultado] = useState("")

    function apiGetPromessa() {
        //se comunica com alguém remoto...
        return minhaPromessa
    }

    useEffect(
        ()=>{
            apiGetPromessa()
            .then(
                (valor) => {
                  //console.log("OK: " + valor) 
                  setResultado(valor) 
                }
            )
            .catch(error=>setResultado(error))
        }
        ,
        []
    )

    return (
        <>
            <h3>Promessa!</h3>
            <h4>Resultado: {resultado}</h4>
        </>
    )
}

export default ComponentePromessa