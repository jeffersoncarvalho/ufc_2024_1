import { useContext } from "react";
import { VariavelDeA } from "./MeuContexto";

const CompA = () => {
  return (
    <div>
      <h3>A</h3>
      <VariavelDeA.Provider value={ {nome:"Jefferson", turma: "WEB"} }>
        <CompB />
        <CompC />
      </VariavelDeA.Provider>
      <hr />
    </div>
  );
};

const CompB = () => {

  const {nome} = useContext(VariavelDeA)

  return (
    <div>
      <h3>B</h3>
      <h3>{nome}</h3>
      <hr />
    </div>
  );
};

const CompC = () => {
  return (
    <div>
      <h3>C</h3>
      <CompD />
      <hr />
    </div>
  );
};

const CompD = () => {
  
  const {turma} = useContext(VariavelDeA)

  return (
    <div>
      <h3>D</h3>
      <h3>{turma}</h3>
      <hr />
    </div>
  );
};

export { CompA, CompB, CompC, CompD };
