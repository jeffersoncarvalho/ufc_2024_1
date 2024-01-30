import Link from "next/link";
import SolarSystem from "./components/solar_system";

const MyProps = () => {
    return (
        <>
            <SolarSystem /> <br />
            <Link href="/">Home</Link>
        </>
    )
}

export default MyProps