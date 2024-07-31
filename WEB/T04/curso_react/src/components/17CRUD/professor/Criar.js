import "../css/crud.css"

import { useState } from "react"

const Criar = () => {
    
    const [nome, setNome] = useState("")
    const [curso, setCurso] = useState("")
    const [titulacao, setTitulacao] = useState("MESTRADO")
    const [ai, setAi] = useState({es:false, lc:false, mc:false}) //ái = área de interesse

    
    const handleCheckbox = (event) => {
        setAi(
            {
                ...ai,
                [event.target.name]:event.target.checked
            }
        )
    }

    const handleInputNome = (event) => {
        setNome(event.target.value)
    }

    const handleInputCurso = (event) => {
        setCurso(event.target.value)
    }

    const handleSelect = (event) => {
        setTitulacao(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        alert("Nome: " + nome + "\nCurso: " + curso + " \nTitulacao: " + titulacao)
    }
    
    return (
        <div className="page-content">
            <h1>Criar Professor</h1>
            <h4>{JSON.stringify(ai)}</h4>
            <form className="form-content" onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label className="form-label" htmlFor="inputNome">Nome</label>
                    <input
                        className="form-control"
                        type="text"
                        name="nome" 
                        id="inputNome"
                        onChange={handleInputNome}
                    />
                </div>
                
                <div className="mb-3">
                    <label className="form-label" htmlFor="inputCurso">Curso</label>
                    <input
                        className="form-control"
                        type="text"
                        name="curso"
                        id="inputCurso"
                        onChange={handleInputCurso} 
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="selectTitulacao">Titulação</label> 
                    <select
                        className="form-select"
                        value={titulacao}
                        id="selectTitulacao"
                        onChange={handleSelect}
                    >
                        <option value="GRADUACAO">GRADUAÇÃO</option>
                        <option value="MESTRADO">MESTRADO</option>
                        <option value="DOUTORADO">DOUTORADO</option>
                    </select>
                </div>

                <div>
                <label className="form-label">Áreas de Interesse</label> 
                <fieldset className="scheduler-border">
                    <div className="form-check">
                        <input 
                            id="idES"
                            type="checkbox"
                            className="form-check-input"
                            checked={ai.es}
                            onChange={handleCheckbox}
                            name="es"
                        />
                        <label 
                            htmlFor="idES"
                            className="form-check-label"
                        >
                            Engenharia de Software
                        </label>
                    </div>
                    <div className="form-check">
                        <input 
                            id="idLC"
                            type="checkbox"
                            className="form-check-input"
                            checked={ai.lc}
                            onChange={handleCheckbox}
                            name="lc"
                        />
                        <label 
                            htmlFor="idLC"
                            className="form-check-label"
                        >
                            Lógica Computacional
                        </label>
                    </div>
                    <div className="form-check">
                        <input 
                            id="idMC"
                            type="checkbox"
                            className="form-check-input"
                            checked={ai.mc}
                            onChange={handleCheckbox}
                            name="mc"
                        />
                        <label 
                            htmlFor="idMC"
                            className="form-check-label"
                        >
                            Matemática Computacional
                        </label>
                    </div>
                </fieldset>
                </div>
                
                <div className="div-button-submit">
                    <button
                        type="submit"
                        className="btn btn-primary"
                        style={{marginLeft:0}}
                    >
                        Submeter
                    </button>
                </div>

            </form>
        </div>
        
    )
}

export { Criar }