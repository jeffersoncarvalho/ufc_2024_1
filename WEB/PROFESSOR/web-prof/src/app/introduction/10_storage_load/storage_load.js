"use client"

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

export default LoadData