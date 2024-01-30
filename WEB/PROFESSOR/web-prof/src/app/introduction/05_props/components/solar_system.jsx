import Planet from "./planet"

const SolarSystem = () => {
    return (
        <>
            <h1> Our Solar System </h1>
            <Planet name="Mercury" image="mercury.png" />
            <Planet name="Venus" image="venus.png" />
            <Planet name="Earth" image="earth.png" />
            <Planet name="Mars" image="mars.png" />
        </>
    )
}

export default SolarSystem