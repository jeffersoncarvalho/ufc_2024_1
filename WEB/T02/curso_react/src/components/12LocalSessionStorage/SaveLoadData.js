import { useState } from "react"

const SaveLoadData = () => {

    const aluno = {nome:"Fulano", curso:"CC", IRA: 6.7}
    const [alunoData, setAlunoData] = useState({})

    function saveData() {
        //localStorage.setItem("aluno",JSON.stringify(aluno))
        sessionStorage.setItem("aluno",JSON.stringify(aluno))
        alert("Dado salvo com sucesso!")
    }

    function loadData() {
        //const alunoCarregado = localStorage.getItem("aluno")
        const alunoCarregado = sessionStorage.getItem("aluno")
        setAlunoData(JSON.parse(alunoCarregado))
    }

    return (
        <div>
            <h1>SAVE AND LOAD DATA</h1>
            <h3>{JSON.stringify(alunoData)}</h3>
            <button onClick={saveData}>SAVE DATA</button>
            <button onClick={loadData}>LOAD DATA</button>
        </div>
    )
}

export default SaveLoadData