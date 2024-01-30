import Link from "next/link"
import ParentComponent from "./parent"

const ParentChildComm =  () => {
    return (
        <>
            <ParentComponent /> <br />
            <Link href="/">Home</Link>
        </>
    )
    
}
export default ParentChildComm