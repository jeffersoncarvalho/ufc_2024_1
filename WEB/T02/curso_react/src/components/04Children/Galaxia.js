import SistemaSolar from "./SistemaSolar";
import Planeta from "./Planeta";

const Galaxia = ({ nome }) => {
  return (
    <div>
      <h1>Galáxia: {nome}</h1>
      <SistemaSolar galaxia={nome}>
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
          imagem="https://science.nasa.gov/wp-content/uploads/2023/09/maxresdefault_copy.jpg"
        />
      </SistemaSolar>
    </div>
  );
};

export default Galaxia;
