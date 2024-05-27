//CONTEXTO
import { Variavel } from "./VariavelContext";
import { useContext } from "react";

const CompA = () => {
  const variavelDeA = {nome:"Jefferson", curso: "SI"};

  return (
    <div>
      <Variavel.Provider value={variavelDeA}>
        <CompB />
        <CompC />
      </Variavel.Provider>
    </div>
  );
};

const CompB = () => {
  const {nome, curso} = useContext(Variavel);
  return (
    <div>
      <h3>B: {nome}, {curso}</h3>
    </div>
  );
};

const CompC = () => {
  return (
    <div>
      <CompD />
    </div>
  );
};

const CompD = () => {
  return (
    <div>
      <CompE />
    </div>
  );
};

const CompE = () => {
  const {curso} = useContext(Variavel);
  return (
    <div>
      <h3>E: {curso}</h3>
    </div>
  );
};

export { CompA, CompB, CompC, CompD, CompE };
