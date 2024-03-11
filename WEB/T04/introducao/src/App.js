//import HelloWorld from "./components/01HelloWorld/HelloWorld";
//import FuncoesInternas from "./components/02FuncoesInternas/FuncoesInternas";
//import Loja from "./components/03Props/Loja";
//import {MeusDados as MD, MeusDadosV1 as MDV1, MeusDadosV2, MeusDadosV3} from "./components/00Atividades/atividade00/01MeusDados";
//import MeusDadosProps from "./components/00Atividades/atividade00/02MeusDados";
//import Temperatura from "./components/00Atividades/atividade00/03Temperatiura";
//import SistemaSolar from "./components/04Children/SistemaSolar";
//import Planeta from "./components/04Children/Planeta";
//import Galaxia from "./components/04Children/Galaxia";
//import ComPai from "./components/05ComPaiFilho/ComPai";
//import Estado from "./components/06Estados/Estado";
import Pokemon from "./components/06Estados/Pokemon";

function App() {
  return (
    <div>
      <h1>Desenvolvimento de Software para a WEB!</h1>
      <Pokemon />
    </div>
  )
}

//questão do children
/*function App() {
  return (
    <div>
      <h1> Desenvolvimento de Software para a WEB!</h1>
      <hr />
      <SistemaSolar>
        <Planeta nome="Mercúrio" tipo="Rochoso" ordem="1" />
        <hr />
        <Planeta nome="Vênus" tipo="Rochoso" ordem="2" />
        <hr />
        <Planeta nome="Terra" tipo="Rochoso" ordem="3" />
        <hr />
        <Planeta nome="Marte" tipo="Rochoso" ordem="4" />
        <hr />
        <Planeta nome="Júpiter" tipo="Gasoso" ordem="5" />
        <hr />
        <Planeta nome="Saturno" tipo="Gasoso" ordem="6" />
        <hr />
        <Planeta nome="Urano" tipo="Gasoso" ordem="7" />
        <hr />
        <Planeta nome="Netuno" tipo="Gasoso" ordem="8" />
      </SistemaSolar>
    </div>
  );
}*/

export default App;
