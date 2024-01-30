import Link from "next/link";
import SaveData from "./storage_save";

const PageSave = () => {
    return (
        <>
            <SaveData />
            <Link href="/">Home</Link>
        </>
    )
}

export default PageSave