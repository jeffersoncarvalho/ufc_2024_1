import Planeta from "./Planeta"

const SistemaSolar = () => {
    return (
        <div>
            <h1>Sistema Solar</h1>
            <Planeta nome="Mercúrio" tipo="rochoso" pos="1" imagem="https://www.nasa.gov/wp-content/uploads/2023/03/729223main_728322main_messenger_orbit_image20130218_2_full_full_full.jpg"/>
            <Planeta nome="Vênus" tipo="rochoso" pos="2" imagem="https://science.nasa.gov/wp-content/uploads/2016/05/venus2-jpg.webp"/>
            <Planeta nome="Terra" tipo="rochoso" pos="3" imagem="https://midia.gruposinos.com.br/_midias/jpg/2015/09/20/nasa_blue_marble-1066991.jpg"/>
            <Planeta nome="Marte" tipo="rochoso" pos="4" imagem="https://mars.nasa.gov/system/site_config_values/meta_share_images/1_mars-nasa-gov.jpg"/>
        </div>
    )
}

export default SistemaSolar