const SaveData = () => {

    function saveData() {
        const aluno = { "nome": "Jefferson", "idade": 40, "curso": "Sistemas de Informação" }
        localStorage.setItem("aluno", JSON.stringify(aluno))
    }

    return (
        <>
            <h1>Saving data...</h1>
            {
                saveData()
            }
            <LoadData />
        </>
    )
}

const LoadData = () => {

    function loadData() {
        const aluno = JSON.parse(localStorage.getItem("aluno"))
        return (
            <>
                <h1>
                    Nome: {aluno.nome}
                </h1>
            </>
        )
    }

    return (
        <>
            <h1>Loading Data...</h1>
            {
                loadData()
            }
        </>
    )
}

export default SaveData