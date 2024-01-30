import Link from "next/link";
import LoadData from "./storage_load";

const PageLoad = () => {
    return (
        <>
            <LoadData />
            <Link href="/">Home</Link>
        </>
    )
}

export default PageLoad