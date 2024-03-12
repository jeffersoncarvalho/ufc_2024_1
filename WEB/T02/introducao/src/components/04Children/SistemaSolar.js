import { Children, cloneElement } from "react";

/*const SistemaSolar = ({children, galaxia}) => {
  return (
    <div>
      <h1>Sistema Solar da Galáxia {galaxia}</h1>
      {children}
    </div>
  );
};
*/
const SistemaSolar = ({children, galaxia}) => {
  return (
    <div>
      <h1>Sistema Solar da Galáxia {galaxia}</h1>
      {
        Children.map(
          children,
          (planeta) => {
            cloneElement(planeta, {galaxia})
          }//fn anônima
        )//map
      }
    </div>
  );
};


export default SistemaSolar;
