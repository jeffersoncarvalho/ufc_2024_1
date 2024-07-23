import { Link } from "react-router-dom";
import "../css/crud.css";

import professores from "../data/data"

const Listar = () => {
  const tabelaProfessores = () => {
    const professoresTabelados = professores.map((professor) => (
      <tr>
        <th scope="row">{professor.id}</th>
        <td>{professor.nome}</td>
        <td>{professor.curso}</td>
        <td>{professor.titulacao}</td>
        <td>{JSON.stringify(professor.ai)}</td>
        <td>
            <div>
                <Link className="btn btn-primary button-space" to={`/professores/editar/${professor.id}`}>
                    Editar
                </Link>
                <button className="btn btn-danger button-space">
                    Apagar
                </button>
            </div>
        </td>
      </tr>
    ));
    
    return (
      <table className="table table-striped table-content">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Curso</th>
            <th scope="col">Titulação</th>
            <th scopde="col">Áreas de Interesse</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>{professoresTabelados}</tbody>
      </table>
    );
  };

  return (
    <div className="page-content">
      <h2>Listar Professor</h2>
      {tabelaProfessores()}
    </div>
  );
};

export default Listar;
