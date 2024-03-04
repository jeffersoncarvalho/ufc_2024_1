//import HelloWorld from "./components/01HelloWorld/HelloWorld";
//import FuncoesInternas from "./components/02FuncoesInternas/FuncoesInternas";
import SistemaSolar from "./components/04Children/SistemaSolar";
import Planeta from "./components/04Children/Planeta";

function App() {
  return (
    <div>
      <h1>Desenvolvimento de Software para WEB!</h1>
      <h3>Prof. Jefferson de Carvalho</h3>
      <SistemaSolar>
        <Planeta
          nome="Mercúrio"
          tipo="rochoso"
          pos="1"
          imagem="https://www.nasa.gov/wp-content/uploads/2023/03/729223main_728322main_messenger_orbit_image20130218_2_full_full_full.jpg"
        />
        <Planeta
          nome="Vênus"
          tipo="rochoso"
          pos="2"
          imagem="https://science.nasa.gov/wp-content/uploads/2016/05/venus2-jpg.webp"
        />
        <Planeta
          nome="Terra"
          tipo="rochoso"
          pos="3"
          imagem="https://midia.gruposinos.com.br/_midias/jpg/2015/09/20/nasa_blue_marble-1066991.jpg"
        />
        <Planeta
          nome="Marte"
          tipo="rochoso"
          pos="4"
          imagem="https://mars.nasa.gov/system/site_config_values/meta_share_images/1_mars-nasa-gov.jpg"
        />
        <Planeta
          nome="Júpiter"
          tipo="gasoso"
          pos="5"
          imagem="https://science.nasa.gov/wp-content/uploads/2023/09/maxresdefault_copy.jpg"/>

      </SistemaSolar>
    </div>
  );
}

export default App;
