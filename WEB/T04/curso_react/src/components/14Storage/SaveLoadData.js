import { useState } from "react"

const SaveLoadData = () => {

    const [aluno, setAluno] = useState("")

    function saveData() {
        const aluno = { "nome": "Jefferson", "idade": 40, "curso": "Sistemas de Informação" }
        localStorage.setItem("aluno", JSON.stringify(aluno))
        //sessionStorage.setItem("aluno", JSON.stringify(aluno))
        alert("Dados salvo com sucesso.")
    }

    function loadData() {
        //const alunoSalvo = JSON.parse(localStorage.getItem("aluno"))
        const alunoSalvo = localStorage.getItem("aluno")
        //const alunoSalvo = sessionStorage.getItem("aluno")
        setAluno(alunoSalvo)
    }

    return (
        <div>
            <h1>DADO: {aluno}</h1>
            <button
                onClick={()=>saveData()}
            >
                SAVE
            </button>
            <button
                onClick={()=>loadData()}
            >
                LOAD
            </button>
        </div>
    )

}

export default SaveLoadData