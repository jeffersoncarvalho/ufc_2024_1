import { useEffect, useState } from "react"
import axios from "axios"

const CovidAxios = () => {

    //let casos = 0
    //let mortes = 0
    const [casos, setCasos] = useState(0)
    const [mortes, setMortes] = useState(0)

    useEffect(
        () => {
            //modificar para fetch
            //depois usar then-cath e também async await
            axios.get("https://covid19-brazil-api.now.sh/api/report/v1")
            .then(resposta => {
                setCasos(resposta.data.data[8].cases)
                setMortes(resposta.data.data[8].deaths)
                //console.log(casos + " " + mortes)
            })
            .catch(error => console.log(error))
        }
        ,
        []
    )

    return (
        <>
            <h1>CEARÁ</h1>
            <h3>Casos: {casos}</h3>
            <h3>Mortes: {mortes}</h3>
        </>
    )
}

export default CovidAxios

/*
async function acessarCOVID() {
    const response = await fetch("https://covid19-brazil-api.vercel.app/api/report/v1")
    //console.log(response.json())
    const json = await response.json()
    return json.data[8].deaths
}
 */

/*
fetch("https://covid19-brazil-api.vercel.app/api/report/v1")
.then(response => response.json())
.then((json) => {
    console.log(json.data[8].cases)
    console.log("TESTE")
})
.catch(error => console.log(error))
*/