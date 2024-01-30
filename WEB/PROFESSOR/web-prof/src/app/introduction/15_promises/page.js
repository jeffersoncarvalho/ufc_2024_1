import Link from "next/link"
import ConsumePromise from "./consume_promising"

const MyState = () => {
    return (
        <>
            <ConsumePromise />
            <Link href="/">Home</Link>
        </>
    )
}

export default MyState