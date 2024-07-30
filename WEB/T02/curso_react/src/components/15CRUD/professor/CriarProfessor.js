import { eventWrapper } from "@testing-library/user-event/dist/utils"
import { useState } from "react"

const CriarProfessor = () => {

    const [nome, setNome] = useState("")
    const [curso, setCurso] = useState("")
    const [titulacao, setTitulacao] = useState("GRAD")
    const [ai, setAi] = useState({es:false,lc:false,mc:false,al:false})
    const [universidade, setUniversidade] = useState("UFC")

    const handleRadio = (event) => {
        setUniversidade(event.target.value)
    }

    const handleCheckbox = (event) => {
        setAi(
            {
                ...ai,
                [event.target.name]:event.target.checked
            }
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        alert("\n" + nome +"\n" + curso + "\n" + titulacao )
    }

    return (
        <div>
            <h1>Criar Professor</h1>
            <h3>{universidade}</h3>
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="idNome">
                        Nome
                    </label>
                    
                    <input 
                        id="idNome"
                        type="text"
                        name="nome"
                        value={nome}
                        onChange={(event) => setNome(event.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="idCurso">
                        Curso
                    </label>
                    
                    <input 
                        id="idCurso"
                        type="text"
                        name="curso"
                        value={curso}
                        onChange={(event) => setCurso(event.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="idTitulacao">
                        Titulação
                    </label>
                    
                    <select
                        id="idTitulacao"
                        value={titulacao}
                        onChange={(event) => setTitulacao(event.target.value)}
                    >
                        <option value="GRAD">GRADUAÇÃO</option>
                        <option value="MEST">MESTRADO</option>
                        <option value="DOUT" >DOUTORADO</option>
                    </select>
                </div>

                <div>
                    <label>Áreas de Interesse</label>
                    <div>
                        <input 
                            id="idES"
                            type="checkbox"
                            checked={ai.es}
                            name="es"
                            onChange={handleCheckbox}
                        />
                        <label htmlFor="idES">Engenharia de Software</label>
                    </div>
                    <div>
                        <input 
                            id="idLC"
                            type="checkbox"
                            checked={ai.lc}
                            name="lc"
                            onChange={handleCheckbox}
                        />
                        <label htmlFor="idLC">Lógica Computacional</label>
                    </div>
                    <div>
                        <input 
                            id="idMC"
                            type="checkbox"
                            checked={ai.mc}
                            name="mc"
                            onChange={handleCheckbox}
                        />
                        <label htmlFor="idMC">Matemática Computacional</label>
                    </div>
                    <div>
                        <input 
                            id="idAL"
                            type="checkbox"
                            checked={ai.al}
                            name="al"
                            onChange={handleCheckbox}
                        />
                        <label htmlFor="idAL">Algoritimos</label>
                    </div>
                </div>

                <div>
                    <div>
                        <input 
                            id="idUFC"
                            type="radio"
                            name="universidade"
                            value="UFC"
                            onChange={handleRadio}
                            
                        />
                        <label htmlFor="idUFC">UFC</label>
                    </div>
                    <div>
                        <input 
                            id="idIFCE"
                            type="radio"
                            name="universidade"
                            value="IFCE"
                            onChange={handleRadio}
                        />
                        <label>IFCE</label>
                    </div>
                </div>

                <div>
                    <button type="submit">
                        SUBMETER
                    </button>
                </div>

            </form>
        </div>
    )
}

export default CriarProfessor