"use client"
const SaveData = () => {

    function saveData() {
        const aluno = { "nome": "Jefferson", "idade": 40, "curso": "Sistemas de Informação" }
        localStorage.setItem("aluno", JSON.stringify(aluno))
    }

    return (
        <>
            <h1>Saving data on local storage...</h1>
            {
                saveData()
            }
        </>
    )
}

export default SaveData