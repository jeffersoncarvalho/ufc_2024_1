import professores from "../data/db_professor";
import "../css/crud.css";

const ListarProfessor = () => {
  const corpoTabela = () => {
    const novoArray = professores.map(
      (professor) => {
        return (
          <tr>
            <th scope="row">{professor.id}</th>
            <td>{professor.nome}</td>
            <td>{professor.curso}</td>
            <td>{professor.titulacao}</td>
          </tr>
        ); //return de cada elemento como um JSX
      } //funcao arrow
    ); //map
    return novoArray;
  };

  return (
    <div className="page-content">
      <h1>Listar Professores</h1>
      <table className="table table-striped table-content">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Curso</th>
            <th scope="col">Titulação</th>
          </tr>
        </thead>
        <tbody>{corpoTabela()}</tbody>
      </table>
    </div>
  );
};

export default ListarProfessor;
