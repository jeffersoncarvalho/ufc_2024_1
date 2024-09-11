import { Link } from "react-router-dom";

import "../../css/crud.css";
import ProfessorService from "../../services/ProfessorService";
import ProfessorFirebaseService from "../../services/ProfessorFirebaseService";
import FirebaseContext from "../../utils/FirebaseContext";

import { useState, useEffect, useContext } from "react";


const ListarProfessor = () => {
  const [professores, setProfessores] = useState([]);
  const firebase = useContext(FirebaseContext)

  useEffect(() => {
   /* ProfessorService.getProfessoresAxiosAsyncAwait((json) => {
      setProfessores(json);
    });*/
    ProfessorFirebaseService.listar(
      firebase.getFirestoreDb(),
      (professores) => {
        setProfessores(professores)
      }
    )
  }, []);

  const deleteProfessor = (id) => {
    if(window.confirm(`Deseja realmente excluir id = ${id}`)){
      ProfessorService.deleteProfessorById(
        id,
        (response) => {
          //console.log(response)
          const res = professores.filter(
            (professor) => professor.id !== id
          )
          //console.log(res)
          setProfessores(res)
        }
      )
    }
  }

  const corpoTabela = () => {
    const novoArray = professores.map(
      (professor) => {
        return (
          <tr>
            <th scope="row">{professor.id}</th>
            <td>{professor.nome}</td>
            <td>{professor.curso}</td>
            <td>{professor.titulacao}</td>
            <td className="button-content">

              <Link
                className="btn btn-primary"
                to={`/professores/editar/${professor.id}`}
              >
                Editar
              </Link>

              <button 
                className="btn btn-danger"
                onClick={() => deleteProfessor(professor._id)}
              >
                Apagar
              </button>
            </td>
          </tr>
        ); //return de cada elemento como um JSX
      } //funcao arrow
    ); //map
    return novoArray;
  };

  return (
    <div className="page-content">
      <h1>Listar Professores</h1>
      <table className="table table-striped table-content table-bordered">
        <thead className="table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Curso</th>
            <th scope="col">Titulação</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>{corpoTabela()}</tbody>
      </table>
    </div>
  );
};

export default ListarProfessor;
