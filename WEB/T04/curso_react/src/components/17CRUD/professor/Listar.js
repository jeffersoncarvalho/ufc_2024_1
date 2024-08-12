//import professores from "../data/db_professor";
import { useEffect, useState } from "react"
import "../css/crud.css"
import axios from "axios"

const Listar = () => {

  const [professores, setProfessores] = useState([])

  useEffect(
    () => {
      axios.get("http://localhost:3001/professores")
      .then(
        (response) => {
          //console.log(response.data)
          setProfessores(response.data)
        }
      )
      .catch(error => console.log(error))
    }
    ,
    []
  )


  const renderizarProfessores = () => {
    const vetorResultado = professores.map(
        (professor) => {
            return (
                <tr>
                    <th scope="row">{professor.id}</th>
                    <td>{professor.nome}</td>
                    <td>{professor.curso}</td>
                    <td>{professor.titulacao}</td>
                    <td>
                        <div>
                            <button type="button" className="btn btn-secondary">Editar</button>
                            <button type="button" className="btn btn-danger">Apagar</button>
                        </div>
                    </td>
                </tr>
            )
        }
    )
    return vetorResultado;
  };

  return (
    <div className="page-content">
      <h1>Listar Professor</h1>
      <div className="table-content">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nome</th>
              <th scope="col">Curso</th>
              <th scope="col">Titulação</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {renderizarProfessores()}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Listar;
