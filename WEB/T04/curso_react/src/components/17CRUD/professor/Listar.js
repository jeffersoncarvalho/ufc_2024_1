import professores from "../data/db_professor";

const Listar = () => {
  const renderizarProfessores = () => {
    const vetorResultado = professores.map(
        (professor) => {
            return (
                <tr>
                    <th scope="row">{professor.id}</th>
                    <td>{professor.nome}</td>
                    <td>{professor.curso}</td>
                    <td>{professor.titulacao}</td>
                </tr>
            )
        }
    )
    return vetorResultado;
  };

  return (
    <>
      <h1>Listar Professor</h1>
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nome</th>
              <th scope="col">Curso</th>
              <th scope="col">Titulação</th>
            </tr>
          </thead>
          <tbody>
            {renderizarProfessores()}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Listar;
